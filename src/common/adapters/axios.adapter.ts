import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;
  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      throw new Error('ERROR FETCHING');
    }
  }

  async post<T>(url: string, args: any): Promise<T> {
    try {
      const { data } = await this.axios.post<T>(url, args);
      return data;
    } catch (error) {
      throw new Error('ERROR POSTING');
    }
  }

  async patch<T>(url: string, args: any): Promise<T> {
    try {
      const { data } = await this.axios.post<T>(url, args);
      return data;
    } catch (error) {
      throw new Error('ERROR PATCHING');
    }
  }

  async delete<T>(url: string, args: any): Promise<T> {
    try {
      const { data } = await this.axios.post<T>(url, args);
      return data;
    } catch (error) {
      throw new Error('ERROR DELETING');
    }
  }
}
