export interface ENV {
  
  tokenKey: string;
 
}

const env: ENV = {
  
  tokenKey: process.env.REACT_APP_TOKEN_KEY || '',
  
};

export default env;
