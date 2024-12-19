import { ApiResponse, DataItem } from '../types/data';

export async function getData(): Promise<DataItem[]> {
  try {
    const res = await fetch('http://localhost:8000/data/mrt_facebook_insights', { 
      cache: 'no-store',
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const jsonData: ApiResponse = await res.json();
    console.log('API Response:', jsonData);

    // Transform the data into an array of DataItem objects
    const transformedData: DataItem[] = jsonData.data.map(row => {
      const item: Partial<DataItem> = {};
      jsonData.columns.forEach((column, index) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        item[column as keyof DataItem] = row[index] as any;
      });
      return item as DataItem;
    });

    return transformedData;
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error(`Failed to fetch data: ${error instanceof Error ? error.message : String(error)}`);
  }
}

