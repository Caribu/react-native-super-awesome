#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(SuperAwesomeViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end

@interface RCT_EXTERN_MODULE(VideoAd, NSObject)

RCT_EXTERN_METHOD(enableBumperPage)
RCT_EXTERN_METHOD(enableSmallClickButton)
RCT_EXTERN_METHOD(enableTestMode)

RCT_EXTERN_METHOD(load:(int)placementId)
RCT_EXTERN_METHOD(play:(int)placementId)

RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

@end

