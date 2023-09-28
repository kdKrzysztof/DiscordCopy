import axios from 'axios';

import type { LoginForm } from 'interfaces/Forms/FormsTypes';

class Api {
  public async login(data: LoginForm) {
    return await axios.post('api/login', data);
  }

  public async refresh(data: string | null) {
    return await axios.post('api/refresh', {
      refreshToken: data
    });
  }
}

export default new Api();
