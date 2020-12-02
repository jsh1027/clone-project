import { Layout } from '@react-navigation/stack/lib/typescript/src/types';
import { Animated } from 'react-native';

interface Props {
    current: {
        progress: Animated.AnimatedInterpolation
    };
    layouts: {
        screen: 
            {
                height: number;
                width: number;
            };
    }
}

const DefaultOptions = {
    cardStyleInterpolator: ({ current: { progress }, layouts }: Props) => ({
      cardStyle: {
        transform: [
          {
            translateY: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [365, 0],
            }),
          }
        ]
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
          extrapolate: 'clamp',
        }),
      },
    }),
};

const GrowModalOptions = {                    
    cardStyleInterpolator: ({ current: { progress }, layouts }: Props) => ({
      cardStyle: {
        transform: [
          {
            translateY: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.height-415, 0],
            }),
          }
        ]
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
          extrapolate: 'clamp',
        }),
      },
    }),
    cardOverlayEnabled: false
  };

const SlideOptions = {                    
    cardStyleInterpolator: ({ current: { progress }, layouts }: Props) => ({
      cardStyle: {
        transform: [
          {
            translateX: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
            }),
          }
        ]
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
          extrapolate: 'clamp',
        }),
      },
    }),
    cardOverlayEnabled: false
};

const DefaultInputOptions = {                    
  cardStyleInterpolator: ({ current: { progress }, layouts }: Props) => ({
    cardStyle: {
      transform: [
        {
          translateY: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [layouts.screen.height-415, 0],
          }),
        }
      ]
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
  cardOverlayEnabled: false
};

export { DefaultOptions, GrowModalOptions, SlideOptions, DefaultInputOptions };