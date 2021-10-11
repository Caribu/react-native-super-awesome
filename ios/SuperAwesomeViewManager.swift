@objc(SuperAwesomeViewManager)
class SuperAwesomeViewManager: RCTViewManager {

  override func view() -> (SuperAwesomeView) {
    return SuperAwesomeView()
  }
}



