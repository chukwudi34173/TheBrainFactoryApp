<?php

use App\Http\Controllers\aclcontroller;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// candidate examination
Route::get('/', [aclcontroller::class, 'render_registration_form'])->name('render_registration_form');
Route::post('/examination/registration', [aclcontroller::class, 'registerExaminationInfo'])->name('examination.registration');
Route::post('/examination/approvedforprint', [aclcontroller::class, 'approvedforprint'])->name('examination.approvedforprint');

// manager
Route::get('/manager/{access_key}', [aclcontroller::class, 'Index'])->name('app.manager');
Route::post('/manager/get_registered_candidate', [aclcontroller::class, 'getRegisteredCandidate'])->name('manager.get_registered_candidate');
Route::post('/manager/approve_transaction', [aclcontroller::class, 'approveTransaction'])->name('manager.approve_transaction');
Route::post('/manager/get_analytic', [aclcontroller::class, 'getAnalytic'])->name('manager.get_analytic');
Route::get('/delete_old_file', [aclcontroller::class, 'deleteOldFiles'])->name('manager.delete_old_file');
