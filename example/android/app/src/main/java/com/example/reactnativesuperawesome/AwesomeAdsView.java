package com.example.reactnativesuperawesome;

import android.app.Activity;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
// for sending events
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

import tv.superawesome.sdk.publisher.*;

public class AwesomeAdsView extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;


  AwesomeAdsView(ReactApplicationContext context) {
    super(context);
    reactContext = context;
    this.setListener();
  }

  @Override
  public String getName() {
    return "AwesomeAdsView";
  }

  @ReactMethod
  public void load(int placementId) {
    Activity currentActivity = getCurrentActivity();
    SAVideoAd.load(placementId, currentActivity);
  }

  @ReactMethod
  public void play(int placementId) {
    Activity currentActivity = getCurrentActivity();
    // check if ad is loaded
    if (SAVideoAd.hasAdAvailable(placementId)) {
      // display the ad
      SAVideoAd.play(placementId, currentActivity);
    }
  }

//   @ReactMethod
//   public void setAd(SAAd ad) {
//     SAVideoAd.setAd(ad);
//   }

  @ReactMethod
  public void removeAd(int placementId) {
    SAVideoAd.removeAd(placementId);
  }


  public static boolean hasAdAvailable(int placementId) {
    return SAVideoAd.hasAdAvailable(placementId);
  }

//   public static SAAd getAd(int placementId) {
//     return SAVideoAd.getAd(placementId);
//   }

  private void sendEvent(ReactContext reactContext,
                         String eventName,
                         String params) {
    reactContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
      .emit(eventName, params);
  }

  @ReactMethod
  public void addListener(String eventName) {
    // Set up any upstream listeners or background tasks as necessary
  }

  @ReactMethod
  public void removeListeners(Integer count) {
    // Remove upstream listeners, stop unnecessary background tasks
  }

  /**********************************************************************************************
   * Setters & Getters
   **********************************************************************************************/

  @ReactMethod
  public void setListener() {
    SAVideoAd.setListener(new SAInterface() {
      @Override
      public void onEvent(int placementId, SAEvent event) {
        switch (event) {
          case adLoaded:
            // called when an ad has finished loading
            sendEvent(reactContext, "AwesomeAdsVideoEvent", "adLoaded");
            break;
          case adEmpty:
            // called when the request was successful but the server returned no ad
            sendEvent(reactContext, "AwesomeAdsVideoEvent", "adEmpty");
            break;
          case adFailedToLoad:
            // called when an ad could not be loaded
            sendEvent(reactContext, "AwesomeAdsVideoEvent", "adFailedToLoad");
            break;
          case adShown:
            // called when an ad is first shown
            sendEvent(reactContext, "AwesomeAdsVideoEvent", "adShown");
            break;
          case adFailedToShow:
            // called when an ad fails to show
            sendEvent(reactContext, "AwesomeAdsVideoEvent", "adFailedToShow");
            break;
          case adClicked:
            // called when an ad is clicked
            sendEvent(reactContext, "AwesomeAdsVideoEvent", "adClicked");
            break;
          case adEnded:
            // called when a video ad has ended playing (but hasn't yet closed)
            sendEvent(reactContext, "AwesomeAdsVideoEvent", "adEnded");
            break;
          case adClosed:
            // called when a fullscreen ad is closed
            sendEvent(reactContext, "AwesomeAdsVideoEvent", "adClosed");
            break;
        }
      }
    });
  }

  @ReactMethod
  public void enableParentalGate() {
    SAVideoAd.enableParentalGate();
  }

  @ReactMethod
  public void disableParentalGate() {
    SAVideoAd.disableParentalGate();
  }

  @ReactMethod
  public void enableBumperPage() {
    SAVideoAd.enableBumperPage();
  }

  @ReactMethod
  public void disableBumperPage() {
    SAVideoAd.disableBumperPage();
  }

  @ReactMethod
  public void enableTestMode() {
    SAVideoAd.enableTestMode();
  }

  @ReactMethod
  public void disableTestMode() {
    SAVideoAd.disableTestMode();
  }

  @ReactMethod
  public void setConfigurationProduction() {
    SAVideoAd.setConfigurationProduction();
  }

  @ReactMethod
  public void setConfigurationStaging() {
    SAVideoAd.setConfigurationStaging();
  }

  @ReactMethod
  public void setConfigurationDev() {
    SAVideoAd.setConfigurationDev();
  }

  @ReactMethod
  public void setOrientationAny() {
    SAVideoAd.setOrientationAny();
  }

  @ReactMethod
  public void setOrientationPortrait() {
    SAVideoAd.setOrientationPortrait();
  }

  @ReactMethod
  public void setOrientationLandscape() {
    SAVideoAd.setOrientationLandscape();
  }

//   @ReactMethod
//   public void setPlaybackMode(SARTBStartDelay mode) {
//     SAVideoAd.setPlaybackMode(mode);
//   }

  @ReactMethod
  public void enableBackButton() {
    SAVideoAd.enableBackButton();
  }

  @ReactMethod
  public void disableBackButton() {
    SAVideoAd.disableBackButton();
  }

  @ReactMethod
  public void enableCloseButton() {
    SAVideoAd.enableCloseButton();
  }

  @ReactMethod
  public void disableCloseButton() {
    SAVideoAd.disableCloseButton();
  }

  @ReactMethod
  public void enableCloseButtonWithWarning() {
    SAVideoAd.enableCloseButtonWithWarning();
  }

  @ReactMethod
  public void enableCloseAtEnd() {
    SAVideoAd.enableCloseAtEnd();
  }

  @ReactMethod
  public void disableCloseAtEnd() {
    SAVideoAd.disableCloseAtEnd();
  }

  @ReactMethod
  public void enableSmallClickButton() {
    SAVideoAd.enableSmallClickButton();
  }

  @ReactMethod
  public void disableSmallClickButton() {
    SAVideoAd.disableSmallClickButton();
  }

  @ReactMethod
  public SAInterface getListener() {
    return SAVideoAd.getListener();
  }

  @ReactMethod
  public boolean getIsTestEnabled() {
    return SAVideoAd.getIsTestEnabled();
  }

  @ReactMethod
  public boolean getIsParentalGateEnabled() {
    return SAVideoAd.getIsParentalGateEnabled();
  }

  @ReactMethod
  public boolean getIsBumperPageEnabled() {
    return SAVideoAd.getIsBumperPageEnabled();
  }

  @ReactMethod
  public boolean getShouldShowCloseButton() {
    return SAVideoAd.getShouldShowCloseButton();
  }

//   @ReactMethod
//   public SARTBStartDelay getPlaybackMode() {
//     return SAVideoAd.getPlaybackMode();
//   }

  @ReactMethod
  public boolean getShouldAutomaticallyCloseAtEnd() {
    return SAVideoAd.getShouldAutomaticallyCloseAtEnd();
  }

  @ReactMethod
  public boolean getMoatLimitingState() {
    return SAVideoAd.getMoatLimitingState();
  }

  @ReactMethod
  public boolean getShouldShowSmallClickButton() {
    return SAVideoAd.getShouldShowSmallClickButton();
  }

  @ReactMethod
  public SAOrientation getOrientation() {
    return SAVideoAd.getOrientation();
  }

//   @ReactMethod
//   public SAConfiguration getConfiguration() {
//     return SAVideoAd.getConfiguration();
//   }

  @ReactMethod
  public boolean getIsBackButtonEnabled() {
    return SAVideoAd.getIsBackButtonEnabled();
  }

  @ReactMethod
  public void setParentalGate(boolean value) {
    SAVideoAd.setParentalGate(value);
  }

  @ReactMethod
  public void setBumperPage(boolean value) {
    SAVideoAd.setBumperPage(value);
  }

  @ReactMethod
  public void setTestMode(boolean value) {
    SAVideoAd.setTestMode(value);
  }

//   @ReactMethod
//   public void setConfiguration(SAConfiguration value) {
//     SAVideoAd.setConfiguration(value);
//   }

  @ReactMethod
  public void setOrientation(SAOrientation value) {
    SAVideoAd.setOrientation(value);
  }

  @ReactMethod
  public void setBackButton(boolean value) {
    SAVideoAd.setBackButton(value);
  }

  @ReactMethod
  public void setCloseButton(boolean value) {
    SAVideoAd.setCloseButton(value);
  }

  @ReactMethod
  public void setCloseButtonWarning(boolean value) {
    SAVideoAd.setCloseButtonWarning(value);
  }

  @ReactMethod
  public void setCloseAtEnd(boolean value) {
    SAVideoAd.setCloseAtEnd(value);
  }

  @ReactMethod
  public void setSmallClick(boolean value) {
    SAVideoAd.setSmallClick(value);
  }

  @ReactMethod
  public void disableMoatLimiting() {
    SAVideoAd.disableMoatLimiting();
  }

//   @ReactMethod
//   public SAEvents getEvents() {
//     return SAVideoAd.getEvents();
//   }


}






