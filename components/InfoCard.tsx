import React from 'react';
import { View, Text } from 'react-native';
import {
    IconArrowLeft, // Example icon
    IconCurrencyEuro,
    IconCurrencyDollar,
    IconCurrencyBitcoin,
    IconCurrencyEthereum,
    IconCurrencySolana,
    IconPolygon
  } from '@tabler/icons-react-native';
  
const InfoCard = ({ Title, data }: { Title: string, data: any[] }) => {
    const getIcon = (symbol: string) => {
        switch (symbol) {
            case '€':
              return <IconCurrencyEuro size={24} color="white" />;
            case '$':
              return <IconCurrencyDollar size={24} color="white" />;
            case '₿':
              return <IconCurrencyBitcoin size={24} color="white" />;
            case 'Ξ':
              return <IconCurrencyEthereum size={24} color="white" />;
            case '◎':
              return <IconCurrencySolana size={24} color="white" />;
            case 'M':
              return <IconPolygon size={24} color="white" />;
            default:
              return <IconArrowLeft size={24} color="white" />;
          }
        };

    return (
      <View className={('bg-primary rounded-lg p-4 mb-4')}>
        <View className={('flex-row justify-between items-center mb-2')}>
          <Text className={('text-text font-semibold text-lg')}>{Title}</Text>
        </View>
        <View className={('bg-primary rounded-lg p-4')}>
          {data.map((item, index) => (
            <View className={('flex-row justify-between items-center mb-2')} key={index}>
              <View className={('flex-row items-center')}>
                <View className={('bg-blue-500 rounded-full h-8 w-8 justify-center items-center mr-2')}>
                  {getIcon(item.symbol)}
                </View>
                <View>
                  <Text className={('text-text font-medium')}>{item.name}</Text>
                  <Text className={('text-gray-400')}>{item.code}</Text>
                </View>
              </View>
              <Text className={('text-text text-lg font-semibold')}>{item.amount}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

export default InfoCard;
