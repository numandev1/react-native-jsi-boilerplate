package com.reactnativejsiboilerplate;

import android.content.SharedPreferences;
import android.os.Build;
import android.preference.PreferenceManager;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.JavaScriptContextHolder;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = JsiBoilerplateModule.NAME)
public class JsiBoilerplateModule extends ReactContextBaseJavaModule {
    public static final String NAME = "JsiBoilerplate";

    public JsiBoilerplateModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }


  @ReactMethod(isBlockingSynchronousMethod = true)
  public boolean install() {
    try {
      Log.i(NAME, "Loading C++ library...");
      System.loadLibrary("cpp");
      JavaScriptContextHolder jsContext = getReactApplicationContext().getJavaScriptContextHolder();
      nativeInstall(jsContext.get());
      Log.i(NAME, "Successfully installed "+NAME+" JSI Bindings!");
      return true;
    } catch (Exception exception) {
      Log.e(NAME, "Failed to install "+NAME+" JSI Bindings!", exception);
      return false;
    }
  }

   private static native void nativeInstall(long jsiPtr);

    public String getModel() {
      String manufacturer = Build.MANUFACTURER;
      String model = Build.MODEL;
      if (model.startsWith(manufacturer)) {
        return model;
      } else {
        return manufacturer + " " + model;
      }
    }

  public void setItem(final String key, final String value) {
    SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(this.getReactApplicationContext());
    SharedPreferences.Editor editor = preferences.edit();
    editor.putString(key,value);
    editor.apply();
  }

  public String getItem(final String key) {
    SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(this.getReactApplicationContext());
    String value = preferences.getString(key, "");
    return value;
  }
}
