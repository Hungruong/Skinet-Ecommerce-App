import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ShopComponent } from "./shop/shop.component";
import { ProductDetailsComponent } from "./shop/product-details/product-details.component";
import { TestErrorComponent } from "./core/test-error/test-error.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { ServerErrorComponent } from "./core/server-error/server-error.component";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
    { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
    { path: 'test-error', component: TestErrorComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'server-error', component: ServerErrorComponent },
    { path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule) },
    { path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule) },
    { path: 'checkout', canActivate:[AuthGuard], loadChildren: () => import('./checkout/checkout.module').then(mod => mod.CheckoutModule) },
    { path: 'orders', canActivate: [AuthGuard], loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
    { path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule) },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}