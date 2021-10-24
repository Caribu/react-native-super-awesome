#import "React/RCTViewManager.h"
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(SuperAwesomeViewManager, RCTViewManager)

@end

@interface RCT_EXTERN_MODULE(VideoAd, RCTEventEmitter)

RCT_EXTERN_METHOD(disableBumperPage)
RCT_EXTERN_METHOD(disableCloseAtEnd)
RCT_EXTERN_METHOD(disableCloseButton)
RCT_EXTERN_METHOD(disableSmallClickButton)
RCT_EXTERN_METHOD(disableParentalGate)
RCT_EXTERN_METHOD(disableTestMode)
RCT_EXTERN_METHOD(enableBumperPage)
RCT_EXTERN_METHOD(enableCloseAtEnd)
RCT_EXTERN_METHOD(enableCloseButton)
RCT_EXTERN_METHOD(enableParentalGate)
RCT_EXTERN_METHOD(enableSmallClickButton)
RCT_EXTERN_METHOD(enableTestMode)
RCT_EXTERN_METHOD(setConfigurationProduction)
RCT_EXTERN_METHOD(setConfigurationStaging)
RCT_EXTERN_METHOD(setOrientationAny)
RCT_EXTERN_METHOD(setOrientationLandscape)
RCT_EXTERN_METHOD(setOrientationPortrait)

RCT_EXTERN_METHOD(load:(int)placementId)
RCT_EXTERN_METHOD(play:(int)placementId)


@end

