import { getData } from "../api/getdata";
import { DataItem } from '../types/data';


export default async function DisplayData() {
  
    try {
      const data = await getData();
  
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-yellow-400">Facebook Insights Data</h1>
          {data.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-zinc-900 border border-zinc-800">
                <thead>
                  <tr className="bg-blue-600">
                    <th className="border px-4 py-2 ">Date</th>
                    <th className="border px-4 py-2">Campaign ID</th>
                    <th className="border px-4 py-2">Reach</th>
                    <th className="border px-4 py-2">Impressions</th>
                    <th className="border px-4 py-2">Clicks</th>
                    <th className="border px-4 py-2">CTR</th>
                    <th className="border px-4 py-2">Spend</th>
                  </tr>
                </thead>
                <tbody>
                  {data.slice(0, 13).map((item: DataItem, index: number) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-zinc-800' : 'bg-zinc-600'}>
                      <td className="border px-4 py-2">{item.date_start}</td>
                      <td className="border px-4 py-2">{item.campaign_id}</td>
                      <td className="border px-4 py-2">{item.reach}</td>
                      <td className="border px-4 py-2">{item.impressions}</td>
                      <td className="border px-4 py-2">{item.clicks}</td>
                      <td className="border px-4 py-2">{(item.ctr * 100).toFixed(2)}%</td>
                      <td className="border px-4 py-2">${item.spend.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No data available.</p>
          )}
        </div>
      );
    } catch (error) {
      return <div>Error loading data: {error instanceof Error ? error.message : String(error)}</div>;
    }
}
