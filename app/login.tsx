import Constants from "expo-constants";
import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {Text, TextInput, View} from "react-native";
import {usePrivy, useLoginWithEmail, useOAuthFlow} from "@privy-io/expo";
import { Button } from "react-native";

export const LoginScreen = () => {
  const [email, setEmail] = useState(Constants.expoConfig?.extra?.email || "");
  const [code, setCode] = useState("");

  const {user} = usePrivy();
  const emailFlow = useLoginWithEmail();
  const oauth = useOAuthFlow();

  // Side effects which react to login state changes
  useEffect(() => {
    // Report error
    if (emailFlow.state.status === "error") {
      console.error(emailFlow.state.error);
    } else if (oauth.state.status === "error") {
      console.error(oauth.state.error);
    }
  }, [emailFlow.state.status, oauth.state.status]);

  if (user) {
    return (
      <View>
        <Text>Looks like you are already logged in</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Login</Text>
      <Text style={{color: "rgba(0,0,0,0.4)", marginVertical: 10}}>
        (OTP state:{" "}
        <Text style={{color: "blue"}}>{emailFlow.state.status}</Text>)
      </Text>
      <StatusBar style="auto" />

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        inputMode="email"
      />
      <Button
        title="Send Code"
        onPress={() => emailFlow.sendCode({email})}
      />

      <TextInput
        value={code}
        onChangeText={setCode}
        placeholder="Code"
        inputMode="numeric"
      />
      <Button
        title="Login"
        onPress={() => emailFlow.loginWithCode({code})}
      />

      <View style={{display: "flex", flexDirection: "row", gap: 5, margin: 10}}>
        {(["github", "google", "discord", "apple"] as const).map((provider) => (
          <View key={provider}>
            <Button
              title={`Login with ${provider}`}
              onPress={() => oauth.start({provider})}
            />
          </View>
        ))}
      </View>
    </View>
  );
};
