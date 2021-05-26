export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  phone:number;
  address: {
    city: string;
    zipcode: number;
  };
  company: {
    name: string;
  };
}

