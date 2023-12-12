export interface ZohoContact {
  Owner: string;
  Lead_Source: string;
  First_Name: string;
  Last_Name: string;
  Full_Name: string;
  Account_Name: string;
  Email: string;
  Title: string;
  Department: string;
  Phone: string;
  Home_Phone: string;
  Other_Phone: string;
  Fax: string;
  Mobile: string;
  Date_of_Birth: Date;
  Assistant: string;
  Asst_Phone: string;
  Email_Opt_Out: boolean;
  Created_By: string;
  Skype_ID: string;
  Modified_By: string;
  Created_Time: Date;
  Modified_Time: Date;
  Salutation: string;
  Secondary_Email: string;
  Last_Activity_Time: Date;
  Twitter: string;
  Reporting_To: string;
  Unsubscribed_Mode: string;
  Unsubscribed_Time: Date;
  Last_Enriched_Time__s: Date;
  Enrich_Status__s: string;
  Mailing_Street: string;
  Other_Street: string;
  Mailing_City: string;
  Other_City: string;
  Mailing_State: string;
  Other_State: string;
  Mailing_Zip: string;
  Other_Zip: string;
  Mailing_Country: string;
  Other_Country: string;
  Description: string;
  Record_Image: string;
}

export type ZohoContactInput = Partial<ZohoContact>;
export type ZohoContactOutput = ZohoContactInput;
