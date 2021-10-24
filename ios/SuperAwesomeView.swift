

import Foundation
import UIKit
import SuperAwesome

extension UIResponder {
  
  func getOwningViewController() -> UIViewController? {
    var nextResponser = self
    while let next = nextResponser.next {
      nextResponser = next
      if let viewController = nextResponser as? UIViewController {
        return viewController
      }
    }
    return nil
  }
}

class SuperAwesomeView : UIView {
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    setupView()
  }
  
  //initWithCode to init view from xib or storyboard
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
    setupView()
  }
  
  private func setupView() {
    /*
    SuperAwesome.VideoAd.enableTestMode()
    SuperAwesome.VideoAd.enableBumperPage()
    SuperAwesome.VideoAd.enableSmallClickButton()
    SuperAwesome.VideoAd.load(withPlacementId: 74790)
    
    SuperAwesome.VideoAd.setCallback { id, event in
      if (event == SAEvent.adLoaded) {
        if let viewController = self.getOwningViewController() {
          SuperAwesome.VideoAd.play(withPlacementId: 74790, fromVc: viewController)
        }
      } else if (event == SAEvent.adClicked) {
        // Do something
      }
    }
    */
  }
  
}
