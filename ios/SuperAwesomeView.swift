

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
    
    
    //    private let videoPlayer :AwesomeVideoPlayer
    
    //    override init(frame: CGRect) {
    //       super.init(frame: frame)
    //        VideoAd.load(withPlacementId: 74790);
    //        VideoAd.enableTestMode()
    //
    //        print("loading ad")
    //        if(VideoAd.hasAdAvailable(placementId: 74790)){
    //            print("ad is available")
    //            if let viewController = self.getOwningViewController() {
    //                print("attempting to play ad")
    //                VideoAd.play(withPlacementId: 74790, fromVc: viewController)
    //            }
    //
    //        }
    //     }
    
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
        VideoAd.enableTestMode()
        
        
//        VideoAd.setCallback { id, event in
//
//        }
        VideoAd.setCallback { id, event in
            print("callback");
            if (event == SAEvent.adLoaded) {
                if let viewController = self.getOwningViewController() {
                    print("attempting to play ad")
                    VideoAd.play(withPlacementId: 74790, fromVc: viewController)
                }
            }
        }
        
        VideoAd.load(withPlacementId: 74790);
        
        
        print("loading ad")
        if(VideoAd.hasAdAvailable(placementId: 74790)){
            print("ad is available")
            if let viewController = self.getOwningViewController() {
                print("attempting to play ad")
                VideoAd.play(withPlacementId: 74790, fromVc: viewController)
            }
            
        }
    }
    
    
    @objc var color: String = "" {
        didSet {
            self.backgroundColor = hexStringToUIColor(hexColor: color)
        }
    }
    
    func hexStringToUIColor(hexColor: String) -> UIColor {
        let stringScanner = Scanner(string: hexColor)
        
        if(hexColor.hasPrefix("#")) {
            stringScanner.scanLocation = 1
        }
        var color: UInt32 = 0
        stringScanner.scanHexInt32(&color)
        
        let r = CGFloat(Int(color >> 16) & 0x000000FF)
        let g = CGFloat(Int(color >> 8) & 0x000000FF)
        let b = CGFloat(Int(color) & 0x000000FF)
        
        return UIColor(red: r / 255.0, green: g / 255.0, blue: b / 255.0, alpha: 1)
    }
    
    
    
}
