import models from "../models";
import { Role } from "../utils/enumConstant";
import { pAdmin } from "../utils/permissionAdmin";
import _ from 'lodash'
import { pStudent } from "../utils/permissionStudent";


export const upsertPermission = async () => {
	try {
		let inserts: any[] = []
		inserts.push(models.role.findOneAndUpdate({ _id: Role.root._id },
			{
				$set: { name: Role.root.name, permissions: ObjectToArray(pAdmin) }
			}, { upsert: true }));
		inserts.push(models.role.findOneAndUpdate({ _id: Role.nsaf._id },
			{
				$set: { name: Role.nsaf.name, permissions: nsaf() },
			}, { upsert: true }));
		inserts.push(models.role.findOneAndUpdate({ _id: Role.school._id },
			{
				$set: { name: Role.school.name,permissions: school() },
			}, { upsert: true }));
		inserts.push(models.role.findOneAndUpdate({ _id: Role.admin._id },
			{
				$set: { name: Role.admin.name,permissions: admin() },
			}, { upsert: true }));
		inserts.push(models.role.findOneAndUpdate({ _id: Role.student._id },
			{
				$set: { name: Role.student.name,permissions: ObjectToArray(pStudent) },
			}, { upsert: true }));
		inserts.push(models.role.findOneAndUpdate({ _id: Role.verifier._id },
			{
				$set: { name: Role.verifier.name,permissions: verifier() },
			}, { upsert: true }));
		inserts.push(models.role.findOneAndUpdate({ _id: Role.viewer._id },
			{
				$set: { name: Role.viewer.name,permissions: viewer() },
			}, { upsert: true }));
		inserts.push(models.role.findOneAndUpdate({ _id: Role.tvet._id },
			{
				$set: { name: Role.tvet.name,permissions: tvet() },
			}, { upsert: true }));
		inserts.push(models.role.findOneAndUpdate({ _id: Role.teacher._id },
			{
				$set: { name: Role.teacher.name,permissions: teacher() },
			}, { upsert: true }));
		inserts.push(models.role.findOneAndUpdate({ _id: Role.officer._id },
			{
				$set: { name: Role.officer.name,permissions: officer() },
			}, { upsert: true }));
		inserts.push(models.role.findOneAndUpdate({ _id: Role.read_report._id },
			{
				$set: { name: Role.read_report.name,permissions: read_report() },
			}, { upsert: true }));
		await Promise.all([...inserts]);
	} catch (error) {
		console.log(error);
	}
}

function admin() {
	let obj = ObjectToArray(pAdmin);
	let removePermissions: any[] = [
		pAdmin.staff.changeRole,
		pAdmin.course.write,
		pAdmin.course.delete,
		pAdmin.student.apply,
		pAdmin.student.writeApproved,
		pAdmin.poorStudent.writeApproved,
		pAdmin.scholarshipPayment.write,
		pAdmin.scholarshipPayment.delete,
		pAdmin.poorStudent.writeApproved,
		pAdmin.attendance.write,
		pAdmin.attendance.delete,
		pAdmin.attendanceSubmit.write,
		// pAdmin.attendanceSubmit.delete,
		pAdmin.verifyStudent.read,
		pAdmin.verifyStudent.writeApproved,
		pAdmin.approvalInfoStudent.writeApproved,
		pAdmin.approvalInfoStudent.read,
		pAdmin.approvalInfoStudent.request,
	];
	return _.remove(obj, function (item) {
		return _.indexOf(removePermissions, item) == -1
	});
}

function nsaf() {
	return [
		...Object.values(pAdmin.account),
		pAdmin.sector.read,
		pAdmin.applyMajor.read,
		pAdmin.staff.write,
		pAdmin.staff.read,
		pAdmin.student.readApproved,
		pAdmin.student.write,
		pAdmin.student.read,
		pAdmin.poorStudent.writeApproved,
		pAdmin.poorStudent.read,
		pAdmin.poorStudent.read,
		pAdmin.school.read,
		pAdmin.attendanceSubmit.read,
		pAdmin.scholarshipPayment.read,
		pAdmin.scholarshipPayment.write,
		pAdmin.scholarshipPayment.delete,
		pAdmin.shift.read,
	]; 
}

function school() {
	return [
		...Object.values(pAdmin.account),
		pAdmin.applyMajor.read,
		pAdmin.course.read,
		pAdmin.course.write,
		pAdmin.course.setActive,
		...Object.values(pAdmin.staff),
		pAdmin.poorStudent.read,
		pAdmin.poorStudent.request,
		pAdmin.school.update,
		pAdmin.school.read,
		...Object.values(pAdmin.attendance),
		pAdmin.attendanceSubmit.write,
		pAdmin.attendanceSubmit.read,
		...Object.values(pAdmin.report),
		pAdmin.scholarshipPayment.read,
		pAdmin.sector.read,
		pAdmin.shift.read,
		pAdmin.student.request,
		pAdmin.student.readRequesting,
		pAdmin.student.readApproved,
		pAdmin.student.writeApproved,
		pAdmin.student.write,
		pAdmin.student.apply,
		pAdmin.student.read,
		pAdmin.student.writeUser,
		pAdmin.student.addPoorId,

	];	
}

function teacher() {
	return [
		...Object.values(pAdmin.account),
		pAdmin.applyMajor.read,
		pAdmin.course.read,
		pAdmin.student.request,
		pAdmin.student.readRequesting,
		pAdmin.student.readApproved,
		pAdmin.student.write,
		pAdmin.student.apply,
		pAdmin.student.read,
		pAdmin.student.writeUser,
		pAdmin.student.addPoorId,
		pAdmin.poorStudent.read,
		pAdmin.poorStudent.request,
		// pAdmin.verifyStudent.read,
		// pAdmin.verifyStudent.request,
		// pAdmin.approvalInfoStudent.read,
		pAdmin.school.read,
		pAdmin.attendance.write,
		pAdmin.attendance.read,
		pAdmin.attendanceSubmit.read,
		pAdmin.scholarshipPayment.read,
		pAdmin.sector.read,
		pAdmin.shift.read,
	];
}

function verifier() {
	return [
		...Object.values(pAdmin.account),
		pAdmin.applyMajor.read,
		pAdmin.course.read,
		pAdmin.staff.read,
		pAdmin.student.readRequesting,
		pAdmin.student.readApproved,
		pAdmin.student.read,
		pAdmin.student.write,
		pAdmin.poorStudent.read,
		// pAdmin.verifyStudent.read,
		// pAdmin.verifyStudent.writeApproved,
		// pAdmin.approvalInfoStudent.read,
		// pAdmin.approvalInfoStudent.request,
		pAdmin.school.read,
		pAdmin.attendance.read,
		pAdmin.attendanceSubmit.read,
		pAdmin.scholarshipPayment.read,
		...Object.values(pAdmin.report),
	]
}
function tvet() {
	return [
		...Object.values(pAdmin.account),
		pAdmin.sector.read,
		pAdmin.applyMajor.read,
		pAdmin.course.read,
		pAdmin.staff.read,
		pAdmin.student.readRequesting,
		pAdmin.student.readApproved,
		pAdmin.student.resumeStudy,
		pAdmin.student.read,
		pAdmin.student.write,
		pAdmin.poorStudent.read,
		// pAdmin.verifyStudent.read,
		// pAdmin.verifyStudent.writeApproved,
		// pAdmin.approvalInfoStudent.writeApproved,
		// pAdmin.approvalInfoStudent.read,
		// pAdmin.approvalInfoStudent.request,
		pAdmin.school.read,
		pAdmin.attendance.read,
		pAdmin.attendanceSubmit.read,
		pAdmin.scholarshipPayment.read,
		...Object.values(pAdmin.report),
	]
}

function viewer() {
	return [
		...Object.values(pAdmin.account),
		pAdmin.sector.read,
		pAdmin.applyMajor.read,
		pAdmin.school.read,
		pAdmin.course.read,
		pAdmin.staff.read,
		pAdmin.student.read,
		pAdmin.poorStudent.read,
		pAdmin.student.readApproved,
		pAdmin.student.resumeStudy,
		pAdmin.attendance.read,
		pAdmin.attendanceSubmit.read,
		pAdmin.scholarshipPayment.read,
		pAdmin.shift.read,
		pAdmin.landingPageCms.read,
		pAdmin.userDepartment.read,
		pAdmin.systemConfig.read,
		...Object.values(pAdmin.report),
	]
}

function officer() {
	return [
		...Object.values(pAdmin.account),
		pAdmin.sector.read,
		pAdmin.applyMajor.read,
		pAdmin.course.read,
		pAdmin.student.request,
		pAdmin.student.readRequesting,
		pAdmin.student.readApproved,
		pAdmin.student.write,
		pAdmin.student.apply,
		pAdmin.student.read,
		pAdmin.student.writeUser,
		pAdmin.student.addPoorId,
	]
}

function read_report() {
	return [
		pAdmin.sector.read,
		pAdmin.applyMajor.read,
		...Object.values(pAdmin.report),
		...Object.values(pAdmin.account),
	]
}

function ObjectToArray(permission: any) {
	let array = [];  
	for (let mainKey in permission) {
		if (permission.hasOwnProperty(mainKey)) {
			for (let key in permission[mainKey]) {
				if (permission.hasOwnProperty(mainKey)) {
					array.push(permission[mainKey][key]);
				}
			}
		}
	}
	return array;
}