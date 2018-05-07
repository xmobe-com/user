import { expect } from 'chai';

import { User } from './user';


describe('User Package', () => {
  describe('User Properties', () => {
    it('Should return email \'quanganh@aiti.com.vn\'', () => {
      let user = new User('Quang Anh', 'Le', 'quanganh@aiti.com.vn', '+840904123456');
      expect(user.email).to.equal('quanganh@aiti.com.vn');
    });

    it('Should return Full Name Quang Anh Le', () => {
      let user = new User('Quang Anh', 'Le', 'quanganh@aiti.com.vn', '+840904123456');
      expect(user.full_name).to.equal('Quang Anh Le');
    });
  });
});