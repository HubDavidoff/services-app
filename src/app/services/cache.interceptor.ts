import { Injectable } from '@angular/core';
import { HttpCacheService } from './http-cache.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators'
 
@Injectable()

export class CacheInterceptor implements HttpInterceptor{

    constructor(private cacheService : HttpCacheService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(req.method !== 'GET'){
            this.cacheService.invalidateCache();
            console.log(`Invalidation cache: ${req.method} ${req.url}`);
            return next.handle(req);
        }

        const cachedResponse : HttpResponse<any> = this.cacheService.get(req.url);

        if(cachedResponse){
            console.log(`Returning a cached response: ${cachedResponse.url}`);
            console.log(cachedResponse);
            return of(cachedResponse);
        }

        return next.handle(req)
        .pipe(
            tap(event=>{
                if(event instanceof HttpResponse){
                    console.log(`Adding item to cache: ${req.url}`);
                    this.cacheService.put(req.url, event);
                }
            })
        );


    }
    
}