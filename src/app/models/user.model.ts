export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}
