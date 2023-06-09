// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyCN5EgqdLHvFCT0sgFsEmhPt91ZxtJCmjI',
    appId: '1:363683141853:web:a4a81edf48efe9468ce334',
    messagingSenderId: '363683141853',
    projectId: 'chat-3a9a1',
    authDomain: 'chat-3a9a1.firebaseapp.com',
    storageBucket: 'chat-3a9a1.appspot.com',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyADNsrFGjWvQmzKvqcdZipmOKuM3R25990',
    appId: '1:363683141853:android:de16ff85349a3c498ce334',
    messagingSenderId: '363683141853',
    projectId: 'chat-3a9a1',
    storageBucket: 'chat-3a9a1.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyCICJzoQ7o0dEg7SQ4jNbziCiqYtXycXXM',
    appId: '1:363683141853:ios:046e0fabf823940c8ce334',
    messagingSenderId: '363683141853',
    projectId: 'chat-3a9a1',
    storageBucket: 'chat-3a9a1.appspot.com',
    iosClientId: '363683141853-5ierk78vtpdlcgbt5s9ggbudom5pupeq.apps.googleusercontent.com',
    iosBundleId: 'com.example.flutterApplication',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyCICJzoQ7o0dEg7SQ4jNbziCiqYtXycXXM',
    appId: '1:363683141853:ios:046e0fabf823940c8ce334',
    messagingSenderId: '363683141853',
    projectId: 'chat-3a9a1',
    storageBucket: 'chat-3a9a1.appspot.com',
    iosClientId: '363683141853-5ierk78vtpdlcgbt5s9ggbudom5pupeq.apps.googleusercontent.com',
    iosBundleId: 'com.example.flutterApplication',
  );
}
