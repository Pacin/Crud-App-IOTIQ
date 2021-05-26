<<<<<<< HEAD
export class UserModel {
    id: number;
    name: string;
    username: string;
    email: string;
    address: address;
    city: string;
    zipcode: string;
    phone: string;
    website: string;
    company : {
            name: string;
            catchPhrase: string;
            bs: string;
    }; 
}

export class address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
=======
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
>>>>>>> de4da1b25b07de3c6e8eb2d628ba220b73bb3258
}
