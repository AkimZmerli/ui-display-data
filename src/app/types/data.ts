export interface DataItem {
    account_id: string;
    campaign_id: string;
    adset_id: string;
    ad_id: string;
    date_start: string;
    reach: number;
    impressions: number;
    frequency: number;
    clicks: number;
    unique_clicks: number;
    ctr: number;
    unique_ctr: number;
    cpc: number | null;
    cpm: number;
    cpp: number;
    spend: number;
    _dlt_load_id: string;
    _dlt_id: string;
    _dlt_parent_id: string | null;
    offsite_conversion_fb_pixel_purchase: number | null;
    offsite_conversion_fb_pixel_initiate_checkout: number | null;
    offsite_conversion_fb_pixel_add_to_cart: number | null;
    offsite_conversion_fb_pixel_add_payment_info: number | null;
  }
  
  export interface ApiResponse {
    columns: string[];
    data: (string | number | null)[][];
  }
  