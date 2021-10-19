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
class VideoAd: NSObject {
    
  @objc func disableCloseButton() {
    SuperAwesome.VideoAd.disableCloseButton()
  }

  @objc func disableSmallClickButton() {
    SuperAwesome.VideoAd.disableSmallClickButton()
  }

  @objc func enableBumperPage() {
    SuperAwesome.VideoAd.enableBumperPage()
  }

  @objc func enableCloseButton() {
    SuperAwesome.VideoAd.enableCloseButton()
  }

  @objc func enableSmallClickButton() {
    SuperAwesome.VideoAd.enableSmallClickButton()
  }
  
  @objc func enableTestMode() {
    SuperAwesome.VideoAd.enableTestMode()
  }
  
  @objc
  func load(_ placementId: Int) {
    DispatchQueue.main.async {
      SuperAwesome.VideoAd.load(withPlacementId: placementId)
    }
  }

  @objc
  func play(_ placementId: Int) {
    DispatchQueue.main.async {
      SuperAwesome.VideoAd.setCallback { id, event in
        if (event == SAEvent.adLoaded) {
          if let viewController = RCTPresentedViewController() {
            SuperAwesome.VideoAd.play(withPlacementId: placementId, fromVc: viewController)
          }
        }
      }
    }
  }
    
}
