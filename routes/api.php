<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\BatchController;
use App\Http\Controllers\HelperController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/auth/login', [AuthController::class, 'login']); // DONE
Route::post('/auth/register', [AuthController::class, 'createUser'])->middleware('auth:sanctum'); // DONE
Route::post('/auth/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum'); // TO BE IMPLEMENTED
Route::get('/auth/list-associates', [AuthController::class, 'listUsers'])->middleware('auth:sanctum'); // DONE
Route::get('/auth/me', [AuthController::class, 'userDetails'])->middleware('auth:sanctum'); // DONE
Route::post('/auth/passwordChange', [AuthController::class, 'passwordChange'])->middleware('auth:sanctum'); // DONE

Route::post('/course/create', [CourseController::class, 'createCourse'])->middleware('auth:sanctum'); // DONE
Route::get('/course/list', [CourseController::class, 'list'])->middleware('auth:sanctum'); // DONE
Route::post('/course/delete', [CourseController::class, 'delete'])->middleware('auth:sanctum'); // DONE

Route::post('/leads/new', [LeadController::class, 'newLead'])->middleware('auth:sanctum'); // DONE
Route::post('/leads/webhook', [LeadController::class, 'newLeadHook']);
Route::post('/leads/list', [LeadController::class, 'getLeads'])->middleware('auth:sanctum'); // DONE
Route::get('/leads/active', [LeadController::class, 'getActiveLeads'])->middleware('auth:sanctum'); // DONE
Route::post('/leads/all', [LeadController::class, 'getAllLeads'])->middleware('auth:sanctum'); // DONE
Route::post('/leads/followup', [LeadController::class, 'leadFollowUp'])->middleware('auth:sanctum'); // DONE
Route::post('/leads/close', [LeadController::class, 'markLeadAsClosed'])->middleware('auth:sanctum'); // DONE
Route::post('/leads/type/update', [LeadController::class, 'updateLeadType'])->middleware('auth:sanctum'); // DONE
Route::post('/leads/unassign/self', [LeadController::class, 'unAssignSelfFromLead'])->middleware('auth:sanctum'); // DONE
Route::post('/leads/assign/manual', [LeadController::class, 'manuallyAssignLeadToUser'])->middleware('auth:sanctum'); // DONE
Route::get('/leads/followup/today', [LeadController::class, 'listTodayFollowups'])->middleware('auth:sanctum'); // DONE
Route::get('/leads/followup/details/{leadId}', [LeadController::class, 'getFollowupDetails'])->middleware('auth:sanctum'); // DONE
Route::post('/leads/assign-quoted-price', [LeadController::class, 'assignQuotedPrice'])->middleware('auth:sanctum'); // DONE

Route::get('/course/list-associates/{courseId}', [CourseController::class, 'listAssociatesForCourse'])->middleware('auth:sanctum'); // DONE
Route::post('/course/assign-associate', [CourseController::class, 'assignUserToCourse'])->middleware('auth:sanctum'); // DONE
Route::post('/course/remove-associate', [CourseController::class, 'removeUserFromCourse'])->middleware('auth:sanctum'); // DONE
Route::post('/course/update', [CourseController::class, 'updateCourse'])->middleware('auth:sanctum'); // DONE
Route::get('/course/IDByBatch/{batchId}', [CourseController::class, 'getCourseIdByBatchId'])->middleware('auth:sanctum'); // DONE

Route::post('/dashboard/associate-efforts', [DashboardController::class, 'AssociateEffortBetweenDates'])->middleware('auth:sanctum'); // DONE
Route::post('/dashboard/course-efforts', [DashboardController::class, 'CourseBasedEffortBetweenDates'])->middleware('auth:sanctum'); // DONE
Route::post('/dashboard/source-efforts', [DashboardController::class, 'SourceBasedEffortBetweenDates'])->middleware('auth:sanctum'); // DONE
Route::get('/dashboard/total-sales', [DashboardController::class, 'TotalSales'])->middleware('auth:sanctum'); // DONE
Route::get('/dashboard/sales-overview', [DashboardController::class, 'SalesOverview'])->middleware('auth:sanctum'); // DONE
Route::get('/dashboard/collection-overview', [DashboardController::class, 'CollectionOverview'])->middleware('auth:sanctum'); // DONE
Route::get('/dashboard/referral-overview', [DashboardController::class, 'ReferralOverview'])->middleware('auth:sanctum'); // DONE
Route::get('/dashboard/meeting-schedule', [DashboardController::class, 'MeetingDetails'])->middleware('auth:sanctum'); // DONE
Route::get('/dashboard/transaction-details', [DashboardController::class, 'TransactionDetails'])->middleware('auth:sanctum'); // DONE
Route::get('/dashboard/total-sales-last-month', [DashboardController::class, 'TotalSalesLastMonth'])->middleware('auth:sanctum'); // DONE

Route::post('/batch/create', [BatchController::class, 'createBatch'])->middleware('auth:sanctum'); // DONE
Route::post('/batch/list/all', [BatchController::class, 'getAllBatches'])->middleware('auth:sanctum'); // DONE
Route::post('/batch/delete', [BatchController::class, 'deleteBatch'])->middleware('auth:sanctum');
Route::post('/batch/delete/type', [BatchController::class, 'deleteBatchType'])->middleware('auth:sanctum');
Route::post('/batch/update', [BatchController::class, 'updateBatch'])->middleware('auth:sanctum');
Route::post('/batch/list/course', [BatchController::class, 'getBatchesForCourse'])->middleware('auth:sanctum');
Route::post('/batch/list/group', [BatchController::class, 'getBatchGroups'])->middleware('auth:sanctum'); // DONE
Route::post('/batch/add-to-batch', [BatchController::class, 'addToBatch'])->middleware('auth:sanctum'); // DONE
Route::post('/batch/add-to-multiple', [BatchController::class, 'addToBatchMultiple'])->middleware('auth:sanctum'); // DONE
Route::post('/batch/remove-from-batch', [BatchController::class, 'removeFromBatch'])->middleware('auth:sanctum');
Route::post('/batch/change-batch', [BatchController::class, 'changeBatch'])->middleware('auth:sanctum'); // DONE
Route::get('/batch/leads-remaining/{batchId}', [BatchController::class, 'getLeadsRemainingInBatch'])->middleware('auth:sanctum');
Route::post('/batch/list/available', [BatchController::class, 'fetchAvailableBatches'])->middleware('auth:sanctum'); // DONE
Route::post('/batch/add-payment', [BatchController::class, 'addPayment'])->middleware('auth:sanctum'); // DONE
Route::get('/batch/download-schedule/{batchId}', [BatchController::class, 'downloadBatchSchedule']); // DONE
Route::get('/batch/active-batches', [BatchController::class, 'getActiveBatches'])->middleware('auth:sanctum'); // DONE
Route::post('/batch/attendance/mark', [BatchController::class, 'batchAttendance'])->middleware('auth:sanctum'); // DONE
Route::get('/batch/attendance/{batchId}', [BatchController::class, 'fetchAttendance'])->middleware('auth:sanctum'); // DONE
Route::get('/batch/trainers', [BatchController::class, 'getTrainers'])->middleware('auth:sanctum'); // DONE
Route::get('/batch/types', [BatchController::class, 'getBatchTypes'])->middleware('auth:sanctum'); // DONE
Route::post('/batch/type/create', [BatchController::class, 'addBatchType'])->middleware('auth:sanctum'); // DONE

//Route::get('/helper/bulk', [HelperController::class, 'uploadBulkData']);
