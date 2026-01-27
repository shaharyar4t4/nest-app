import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class EvService {
    constructor(private configService: ConfigService) { }

    getDbUrl() {
        // add the evn file database urls
        return this.configService.get<String>('DATABASE_URL')
    }
}
