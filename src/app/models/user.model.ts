export interface UserModel {
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
