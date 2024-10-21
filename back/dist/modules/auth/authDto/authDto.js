"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDto = exports.singupDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const roles_auth_1 = require("../authRoles/roles.auth");
class singupDto {
}
exports.singupDto = singupDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John Doe',
        description: 'User name',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(3, 80),
    __metadata("design:type", String)
], singupDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bXJk6@example.com',
        description: 'User email',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(3, 80),
    __metadata("design:type", String)
], singupDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Example123!',
        description: 'User password',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsStrongPassword)({
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }),
    (0, class_validator_1.Length)(8, 15),
    __metadata("design:type", String)
], singupDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Example123!',
        description: 'User password',
        required: true
    }),
    (0, class_validator_1.IsStrongPassword)({
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }),
    (0, class_validator_1.Length)(8, 15),
    __metadata("design:type", String)
], singupDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Example123!',
        description: 'User password',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 80),
    __metadata("design:type", String)
], singupDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 3574414058,
        description: 'User phone',
        required: true
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], singupDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Argentina',
        description: 'User country',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 20),
    __metadata("design:type", String)
], singupDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Buenos Aires',
        description: 'User city',
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 20),
    __metadata("design:type", String)
], singupDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: roles_auth_1.Role.Admin,
        description: 'User role',
        default: 'user',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], singupDto.prototype, "role", void 0);
class LoginUserDto extends (0, swagger_1.PickType)(singupDto, ['email', 'password']) {
}
exports.LoginUserDto = LoginUserDto;
//# sourceMappingURL=authDto.js.map