import { expect } from 'chai';

import { User } from './user';


describe('User Package', () => {
  describe('User Properties', () => {
    it("Should return 'Quang Anh'", () => {
        let user = new User('Quang Anh', 'Le', 'quanganh@aiti.com.vn', '+840904123456');
        expect(user.first_name).to.equal('Quang Anh');
    });
  })
});