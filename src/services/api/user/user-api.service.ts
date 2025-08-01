import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from '../base-api.service';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  avatar?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends BaseApiService {

  // Get all users
  getUsers(): Observable<User[]> {
    return this.get<User[]>('/users');
  }

  // Get user by ID
  getUserById(id: string): Observable<User> {
    return this.get<User>(`/users/${id}`);
  }

  // Create new user
  createUser(userData: CreateUserRequest): Observable<User> {
    return this.post<User>('/users', userData);
  }

  // Update user
  updateUser(id: string, userData: UpdateUserRequest): Observable<User> {
    return this.put<User>(`/users/${id}`, userData);
  }

  // Delete user
  deleteUser(id: string): Observable<void> {
    return this.delete<void>(`/users/${id}`);
  }

  // Get current user profile
  getCurrentUser(): Observable<User> {
    return this.get<User>('/users/me');
  }

  // Update current user profile
  updateCurrentUser(userData: UpdateUserRequest): Observable<User> {
    return this.put<User>('/users/me', userData);
  }
}
