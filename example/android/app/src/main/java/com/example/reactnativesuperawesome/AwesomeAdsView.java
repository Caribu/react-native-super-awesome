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
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import tv.superawesome.sdk.publisher.*;

public class AwesomeAdsView extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;


    AwesomeAdsView(ReactApplicationContext context) {
        super(context);
        reactContext = context;
        
        // reactContext.addActivityEventListener(activityEventListener);
    }
    @Override
    public String getName() {
        return "AwesomeAdsView";
    }

    @ReactMethod
    public void enableTestMode(){
        SAVideoAd.enableTestMode ();
    }

    @ReactMethod
    public void loadAd(Callback success, Callback error){
         Activity currentActivity = getCurrentActivity();
         SAVideoAd.enableTestMode ();
         SAVideoAd.load (30479, currentActivity); 
    }

    @ReactMethod
    public void play(Callback success, Callback error){
           Activity currentActivity = getCurrentActivity();
        // check if ad is loaded
        if (SAVideoAd.hasAdAvailable (30479)) {

            // display the ad
            SAVideoAd.play (30479, currentActivity);
        }
    }
}