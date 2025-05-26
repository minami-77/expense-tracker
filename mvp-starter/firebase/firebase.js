/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2bSDB_FdWc_WSgREwxQHfEOOVNTuq3DQ",
  authDomain: "expence-tracker-2ed49.firebaseapp.com",
  projectId: "expence-tracker-2ed49",
  storageBucket: "expence-tracker-2ed49.firebasestorage.app",
  messagingSenderId: "847526384559",
  appId: "1:847526384559:web:a6a9a1ec6f88a3dc5d555a",
  measurementId: "G-1L4JJ7B0EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
