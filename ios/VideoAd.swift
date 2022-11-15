//
//  VideoAd.swift
//  SuperAwesome
//
//  Created by Erisvaldo Júnior on 19/10/21.
//  Copyright © 2021 Facebook. All rights reserved.
//

import Foundation
import SuperAwesome

@objc(VideoAd)
class VideoAd: RCTEventEmitter {

  override
  init(){
      super.init()
      self.setCallback()
  }

  override func supportedEvents() -> [String]! {
    return ["AwesomeAdsVideoEvent"]
  }

  @objc func initSDK() {
    AwesomeAds.initSDK(configuration: Configuration(environment: .production, logging: false)) {
      print("AwesomeAds SDK init complete")
    }
  }

  @objc func disableBumperPage() {
    SuperAwesome.VideoAd.disableBumperPage()
  }
  
  @objc func disableCloseAtEnd() {
    SuperAwesome.VideoAd.disableCloseAtEnd()
  }
  
  @objc func disableCloseButton() {
    SuperAwesome.VideoAd.disableCloseButton()
  }
  
  @objc func disableSmallClickButton() {
    SuperAwesome.VideoAd.disableSmallClickButton()
  }
  
  @objc func disableParentalGate() {
    SuperAwesome.VideoAd.disableParentalGate()
  }
  
  @objc func disableTestMode() {
    SuperAwesome.VideoAd.disableTestMode()
  }
  
  @objc func enableBumperPage() {
    SuperAwesome.VideoAd.enableBumperPage()
  }
  
  @objc func enableCloseAtEnd() {
    SuperAwesome.VideoAd.enableCloseAtEnd()
  }
  
  @objc func enableCloseButton() {
    SuperAwesome.VideoAd.enableCloseButton()
  }
  
  @objc func enableParentalGate() {
    SuperAwesome.VideoAd.enableParentalGate()
  }
  
  @objc func enableSmallClickButton() {
    SuperAwesome.VideoAd.enableSmallClickButton()
  }
  
  @objc func enableTestMode() {
    SuperAwesome.VideoAd.enableTestMode()
  }

  @objc func setConfigurationProduction() {
    SuperAwesome.VideoAd.setConfigurationProduction()
  }
  
  @objc func setConfigurationStaging() {
    SuperAwesome.VideoAd.setConfigurationStaging()
  }
  
  @objc func setOrientationLandscape() {
    SuperAwesome.VideoAd.setOrientationLandscape()
  }
  
  @objc func setOrientationPortrait() {
    SuperAwesome.VideoAd.setOrientationPortrait()
  }
  
  @objc func setOrientationAny() {
    SuperAwesome.VideoAd.setOrientationAny()
  }
  
  @objc
  func load(_ placementId: Int) {
    DispatchQueue.main.async {
      SuperAwesome.VideoAd.load(withPlacementId: placementId)
    }
  }

  @objc
  func play(_ placementId: Int) {
    if let viewController = RCTPresentedViewController() {
      DispatchQueue.main.async {
        SuperAwesome.VideoAd.play(withPlacementId: placementId, fromVc: viewController)
      }
    }
  }
  
  @objc
  func setCallback() {
    SuperAwesome.VideoAd.setCallback { id, event in
      self.sendEvent(withName: "AwesomeAdsVideoEvent", body: event.rawValue)
    }
  }
}
