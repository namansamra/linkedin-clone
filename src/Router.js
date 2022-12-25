import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import UserProfileForm from './components/UserProfileForm/UserProfileForm';
import { SavedPostsContainer } from './pages/SavedPosts';
import { TimelineContainer } from './pages/Timeline';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login" exact element={<Login />} />
        <Route
          path="/home"
          exact
          element={
            <ProtectedRoute>
              <TimelineContainer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/network"
          exact
          element={
            <ProtectedRoute>
              <TimelineContainer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          exact
          element={
            <ProtectedRoute>
              <TimelineContainer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs"
          exact
          element={
            <ProtectedRoute>
              <TimelineContainer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/savedposts"
          exact
          element={
            <ProtectedRoute>
              <SavedPostsContainer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          exact
          element={
            <ProtectedRoute>
              <TimelineContainer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/userprofileform"
          exact
          element={
            <ProtectedRoute>
              <UserProfileForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
