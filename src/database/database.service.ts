import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false;

    // ONE IMPORTANT POINT ---> like special method, Hooks, or lifecycle of event is always start with "On" keyword like(onModuleInit())
    
    // Lifecycle hook that is called once the module has been initialized
    onModuleInit(){
        this.isConnected = true;
        console.log('Database is connected')
    }

    onApplicationShutdown(signal: string){
        this.isConnected = false;
        console.log(`Database disconnected due to app shutdown. Signal ${signal}`)
        // signal --> why application is close mention the reason along with...
    }

    getStatus(){
        return this.isConnected ? 'Connected': 'Disconnect';
    }
}
