# react-native-super-awesome

React native module for SuperAwesome Ads (Android and iOS). Typescript supported.

## Installation

```sh
npm install react-native-super-awesome
```

## Usage

For now the bridge only support Video Ads. Banner Ads and Interstitial Ads are not implemented yet.

The following code block sets up a video ad and loads it:

```js
import * as React from 'react';

import { View } from 'react-native';
import { SAEvent, VideoAd } from 'react-native-super-awesome';

export default function App() {

  const SA_PLACEMENT_ID = 1234;
  
  React.useEffect(() => {
    VideoAd.disableBumperPage();
    VideoAd.disableCloseButton();
    VideoAd.disableCloseAtEnd();
    VideoAd.enableParentalGate();
    VideoAd.enableSmallClickButton();
    VideoAd.disableTestMode();
    VideoAd.load(SA_PLACEMENT_ID);
    VideoAd.setConfigurationProduction();
    VideoAd.setCallback().then((result: SAEvent) => {
      if (result === SAEvent.adLoaded) {
        VideoAd.play(SA_PLACEMENT_ID);
      }
    });
  }, []);

  return <View></View>;
}
```

## API

| SAEvent (Enum)           | 
| ------------------------ | 
| adLoaded                 |
| adEmpty                  |
| adFailedToLoad           | 
| adAlreadyLoaded          | 
| adShown                  | 
| adFailedToShow           | 
| adClicked                | 
| adEnded                  | 
| adClosed                 | 

| VideoAd (Class)             | Parameter | Return          |
| ------------------------    | --------- | --------------- |
| disableBumperPage()         | void      | void            |
| disableCloseAtEnd()         | void      | void            |
| disableCloseButton()        | void      | void            |
| disableSmallClickButton()   | void      | void            |
| disableParentalGate()       | void      | void            |
| disableTestMode()           | void      | void            |
| enableBumperPage()          | void      | void            |
| enableCloseAtEnd()          | void      | void            |
| enableCloseButton()         | void      | void            |
| enableSmallClickButton()    | void      | void            |
| enableParentalGate()        | void      | void            |
| enableTestMode()            | void      | void            |
| setCallback()               | void      | evt: SAEvent    |
| setConfigurationStaging()   | void      | void            |
| setConfigurationProduction()| void      | void            |
| setOrientationAny()         | void      | void            |
| setOrientationLandscape()   | void      | void            |
| setOrientationPortrait()    | void      | void            |
| load()                      | id: Int   | void            |
| play()                      | id: int   | void            |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
