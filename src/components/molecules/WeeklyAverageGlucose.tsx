import React from 'react';
import { BarChart } from 'react-native-gifted-charts';
import { Center, Box, VStack, Text, Heading, View} from "@gluestack-ui/themed";

// Define a type for the glucose level data
type GlucoseDataPoint = {
  value: number;
  label: string;
};

const WeeklyAverageGlucose: React.FC = () => {
  // Mock data for glucose levels throughout a week
  const glucoseData: GlucoseDataPoint[] = [
    { value: 130, label: 'Sun' },
    { value: 150, label: 'Mon' },
    { value: 120, label: 'Tue' },
    { value: 170, label: 'Wed' },
    { value: 160, label: 'Thu' },
    { value: 110, label: 'Fri' },
    { value: 140, label: 'Sa' },
  ];

  // Convert glucose data to BarData type required by BarChart
  const barChartData = glucoseData.map((dataPoint) => ({
    ...dataPoint,
    frontColor:'rgba(206, 226, 252,1)',
        gradientColor:'rgba(61, 137, 245,1)'
  }));

  const renderTitle = () => {
    return(
      <View style={{marginVertical: 10}}>
      <Text
        style={{
          color: 'gray',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Weekly average, glucose level
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 24,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: 'rgba(61, 137, 245,1)',
              marginRight: 8,
            }}
          />
          <Text
            style={{
              width: 60,
              height: 16,
              color: 'lightgray',
            }}>
            mg/dl
          </Text>
        </View>
      </View>
    </View>
    )
}

  return (
    <View 
      backgroundColor='#FFFFFF'
      padding={10}
      borderRadius={10}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
      }}
    >
      {renderTitle()}
      <BarChart
        data={barChartData}
        isAnimated
        noOfSections={4}
        barWidth={21}
        maxValue={200}
        minValue={0}
        initialSpacing={5}
        height={150}
        width={350}
        showGradient={true}
        yAxisThickness={0}
        xAxisThickness={0}
        dashWidth={1}
        dashGap={6}
        yAxisTextStyle={{color: '#3D89F5', fontWeight: 'bold'}}
        xAxisTextStyle={{color: '#3D89F5', fontWeight: 'bold'}}
        barBorderRadius={4}
        horizontalLabelTextStyle={{fontWeight: 'bold'}}
      />
      
    </View>
  );
};

export default WeeklyAverageGlucose;
