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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const images_service_1 = require("./images.service");
const fs_1 = require("fs");
const multer_1 = require("multer");
const image_dto_1 = require("./image.dto");
const process_service_1 = require("../process/process.service");
const process_enum_1 = require("../process/process.enum");
const INIT_FILE_NAME = 'initial.jpg';
let ImagesController = class ImagesController {
    constructor(imagesService, processService) {
        this.imagesService = imagesService;
        this.processService = processService;
    }
    async genererFichierPourImpression(id, file) {
        const imageDto = new image_dto_1.ImageDto();
        imageDto._id = id;
        imageDto.photoInitiale = file;
    }
    async recupererImagesGenerer(pseudo, res) {
        res.sendFile('chuck.svg', { root: 'impressions' });
    }
    imprimerImage(file) {
        console.log(file);
        return null;
    }
    async initialiserWorkflow() {
        this.processService.execCommand(process_enum_1.processEnum.TEST);
        return this.imagesService.initialiserWorkflow();
    }
    async miseAjoutPseudo(image) {
        return this.imagesService.editImage(image._id, image);
    }
};
__decorate([
    common_1.Post('/test'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: (req, file, cb) => {
                const uploadPath = './impressions/' + req.query.id;
                if (!fs_1.existsSync(uploadPath)) {
                    fs_1.mkdirSync(uploadPath);
                }
                cb(null, uploadPath);
            },
            filename: (req, file, cb) => {
                return cb(null, INIT_FILE_NAME);
            }
        })
    })),
    __param(0, common_1.Param('id')), __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "genererFichierPourImpression", null);
__decorate([
    common_1.Get('/generer/:pseudo'),
    __param(0, common_1.Param('pseudo')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "recupererImagesGenerer", null);
__decorate([
    common_1.Post('/imprimer'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], ImagesController.prototype, "imprimerImage", null);
__decorate([
    common_1.Get('/initialiser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "initialiserWorkflow", null);
__decorate([
    common_1.Put('/pseudo'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [image_dto_1.ImageDto]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "miseAjoutPseudo", null);
ImagesController = __decorate([
    common_1.Controller('api/images'),
    __metadata("design:paramtypes", [images_service_1.ImagesService,
        process_service_1.ProcessService])
], ImagesController);
exports.ImagesController = ImagesController;
//# sourceMappingURL=images.controller.js.map