import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class FetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    try {
      const resp = await fetch(url);
      const data: T = await resp.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching data');
    }
  }

  async post<T>(url: string, body: any): Promise<T> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      }
      const data: T = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error creating data to ${url}: ${error.message}`);
    }
  }

  async patch<T>(url: string, data: any): Promise<T> {
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      }
      const reponseData: T = await response.json();
      return reponseData;
    } catch (error) {
      throw new Error(`Error updating data to ${url}: ${error.message}`);
    }
  }

  async delete<T>(url: string, data: any): Promise<T> {
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      }
      const reponseData: T = await response.json();
      return reponseData;
    } catch (error) {
      throw new Error(`Error deleting data to ${url}: ${error.message}`);
    }
  }
}
