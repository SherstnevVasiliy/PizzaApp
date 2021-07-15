package com.myapp.batterylevel; // имя пакета вашего приложения

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;

import java.util.Map;
import java.util.HashMap;

public class BatteryLevelModule extends ReactContextBaseJavaModule {
    public BatteryLevelModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        // "BatteryLevel" - имя модуля, доступное из JavaScript
        return "BatteryLevel";
    }
    // анотация, без которой вы не сможете вызвать метод из JS
    @ReactMethod
    public void getLevel(Callback updateLevelCallback) {
        IntentFilter iFilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
        Intent battery = getReactApplicationContext().registerReceiver(null, iFilter);

        int level = battery.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
        int scale = battery.getIntExtra(BatteryManager.EXTRA_SCALE, -1);

        float batteryPercent = level / (float)scale; // значение от 0 до 1

        updateLevelCallback.invoke(batteryPercent); // выполняем callback-метод, переданный из JavaScript и передаем в него значение batteryPercent
    }
}
