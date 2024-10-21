"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const app_module_1 = require("./app.module");
const auth_guard_1 = require("./modules/auth/authGuard/auth.guard");
const role_guard_1 = require("./modules/auth/authGuard/role.guard");
const request = require("supertest");
describe('AppController (e2e)', () => {
    let app;
    beforeEach(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [app_module_1.AppModule],
        })
            .overrideGuard(auth_guard_1.AuthGuard)
            .useValue({ canActivate: () => true })
            .overrideGuard(role_guard_1.RoleGuard)
            .useValue({ canActivate: () => true })
            .compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    it('Get /users should return 200 status code', async () => {
        const req = await request(app.getHttpServer()).get('/users');
        console.log(req.body);
        expect(req.status).toBe(200);
    });
});
//# sourceMappingURL=app.e2e-spect.js.map