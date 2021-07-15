package com.myapp.nativelogger; // имя пакета вашего приложения

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;
import android.util.Log;

import java.util.Map;
import java.util.HashMap;


public class NativeLoggerModule extends ReactContextBaseJavaModule {

    private static final String LOG_TAG = "LOG";

    public NativeLoggerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        // "NativeLogger" - имя модуля, доступное из JavaScript
        return "NativeLogger";
    }
    // анотация, без которой вы не сможете вызвать метод из JS
    @ReactMethod
    public void logObject(String logedValue, Callback updateLevelCallback) {
        String value = logedValue + "from Native Logger";
        updateLevelCallback.invoke(value); // выполняем callback-метод, переданный из JavaScript и передаем в него значение batteryPercent
    }
}
