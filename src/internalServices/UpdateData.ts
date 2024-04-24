// import models from "../models";

import controllers from "../controllers";
import models, { ObjectId } from "../models";


// export const updateAttendlistDate = async () => {
// 	try {
// 		let record = 1;
// 		let updateCount = 1
// 		while (record > 0) {
// 			let lists = await models.attendanceList.find({
// 				status: 1, date: null
// 			}).limit(100)
// 			record = lists.length;
// 			console.log(`record count: ${lists.length}`);
// 			for (var i = 0; i < lists.length; i++) {
// 				let al = lists[i];
// 				let date = new Date(al.year, al.month - 1, al.day);
// 				await models.attendanceList.findOneAndUpdate({ _id: al._id }, { $set: { date: date } });
// 				await models.attendanceStudent.updateMany({ attendance_lists: al._id }, { $set: { date: date } });
// 				console.log(`${updateCount} - ${al._id} old: ${al.year} ${al.month} ${al.day}, inserted: ${date}`)
// 				updateCount++;
// 			}
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

export const updateStudentTypeField = async () => {
    try {
        let studentIds = femaleStudentToUpdate.map(item => new ObjectId(item._id));
        // console.log(await models.requestTimeline.count({students: {$in : studentId}, status: 9, timeline_type: 1}));
        // console.log(await models.student.count({_id: {$in : studentId}}));
        // console.log(await models.requestTimeline.updateMany({ students: {$in : studentIds}, status: 9, timeline_type: 1},
        //      {$set: {quit_type: controllers.typeLeaveScholarship.status.NOT_ENOUGH_DOCUMENT}})); 
        // console.log(await models.student.updateMany({ _id: {$in : studentIds}},
        //      {$set: {type_leavel_scholarships: controllers.typeLeaveScholarship.status.NOT_ENOUGH_DOCUMENT}})); 

    } catch (error) {
        console.log(error);
    }
}

const maleStudentToUpdate = [
    {
        "_id": "6588d9af5139e2e90eaa94e1",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "6594c1b90771f87efe025eba",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "659cef1cffc32fa81eb33994",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "655f2786d7c5b7ad6c77446a",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "6583b4165139e2e90e9b95ac",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "658b94f05139e2e90eb5e432",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "6584f8e55139e2e90ea0b231",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "656ea2188c3057914764c75f",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "656eef0f0b62e452465183ee",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "65742c713a256680f50bc6eb",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "659f5ec228fe21a8cb0a5978",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "6588de235139e2e90eaabe38",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "65b6167f84d8003638a8b096",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "655e3a5707454fe5afc27dfe",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "657965dd3a256680f523086a",
        "type_leavel_scholarships": 6
    },
    {
        "_id": "655f06bbd7c5b7ad6c7593df",
        "type_leavel_scholarships": 6
    }
]

const femaleStudentToUpdate = [
    {
        "_id": "65688b76b371188f1419d879",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6583e0cc5139e2e90e9ca39d",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6585cdfd5139e2e90ea55d46",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656ab86f6e702d09dcab82b8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6580fe835139e2e90e9020b9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657c1568cab7244e7d708100",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6555b2a5fbfbe9529ceb613e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659b5d6b56a21080a279cee1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6569a574b371188f1420c926",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65781eb43a256680f51a5bd5",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659ea330a54ffb8955330214",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658cc1f15139e2e90eb97db7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659ca7b99705a8d4ee1f0bdb",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6559c1f05c50a1da62a02000",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65649ff6b371188f14062075",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65965e3d56a21080a26d32e4",
        "type_leavel_scholarships": 5
    }
]

const studentsIdToUpdate = [
    {
        "_id": "657fd622cab7244e7d7897fe"
    },
    {
        "_id": "659e878aa54ffb8955327cba"
    },
    {
        "_id": "658a8a465139e2e90eb338cb"
    },
    {
        "_id": "65a0ff4028fe21a8cb13a173"
    },
    {
        "_id": "65a4dea1e32fc2fd7e7698cb"
    },
    {
        "_id": "65a49f68572f93ea4c77d9b0"
    },
    {
        "_id": "658cf91c5139e2e90ebb3833"
    },
    {
        "_id": "659f6cbb28fe21a8cb0af979"
    },
    {
        "_id": "655f5091d7c5b7ad6c7819f0"
    },
    {
        "_id": "658cf9775139e2e90ebb3974"
    },
    {
        "_id": "65783c873a256680f51c0c13"
    },
    {
        "_id": "659f8cff28fe21a8cb0ba4dd"
    },
    {
        "_id": "657910933a256680f51d7fb9"
    },
    {
        "_id": "65892c0f5139e2e90ead4e83"
    },
    {
        "_id": "656d2d026e702d09dcb117e4"
    },
    {
        "_id": "655c1d3f984959b734aa26e1"
    },
    {
        "_id": "65a0b2fb28fe21a8cb10b95d"
    },
    {
        "_id": "65a4de07e32fc2fd7e769381"
    },
    {
        "_id": "65708bc3e46926eabf1af512"
    },
    {
        "_id": "657a977a3a256680f5287d66"
    },
    {
        "_id": "657fa3b1cab7244e7d7680f3"
    },
    {
        "_id": "658ba0fa5139e2e90eb67513",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6561e529b371188f14017e2c",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657ac757cab7244e7d6a65b7",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65853dba5139e2e90ea3713a",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6567f64eb371188f1413193e",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656da5108c305791476134f9",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65669ddfb371188f14094ca0",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655bf412984959b734a9404a",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656c674c6e702d09dcaff80a",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655732f0677fedf2af3d9672",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658917855139e2e90eacbf3e",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656d5f206e702d09dcb3e41a",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65696935b371188f141e0566",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659384420771f87efefb0e77",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655db442a3ebbd69b0c827cc",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657fca6fcab7244e7d785637",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6567f706b371188f1413250f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6598f69256a21080a27667cb",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658056de5139e2e90e8f4e46",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6597da9d56a21080a2746e1a",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65696f04b371188f141e2240",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65676742b371188f14117a7a",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a0c11228fe21a8cb11536e",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655b07b6984959b734a5ded3",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65890dd35139e2e90eac993d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659ba13756a21080a27be5e6",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6576a5973a256680f510864d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655649ae54091050341b2dc0",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6558ac625c50a1da629e0dd8",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6579796c3a256680f524825c",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656ae9736e702d09dcac93fe",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65796b1e3a256680f5237a36",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6597d60056a21080a2745fcb",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6573c8bb3a256680f50a795f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6594dae20771f87efe03a154",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655db0a3a3ebbd69b0c7f5cf",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658244425139e2e90e951c02",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65952d3b56a21080a2699678",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65743e213a256680f50bff0e",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6594eab756a21080a2679327",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659cfab1ffc32fa81eb3c5b5",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a24864572f93ea4c7292f0",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a0f9bd28fe21a8cb1358dd",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659a57e356a21080a2789271",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655b6ead984959b734a8cf70",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6586a90e5139e2e90ea7e28d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6588f6915139e2e90eabd042",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659cfa3cffc32fa81eb3c12d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655db570a3ebbd69b0c83aad",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657813b53a256680f519518a",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6577ef9e3a256680f5174ae6",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a1fe54572f93ea4c70e65a",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656851c2b371188f14184beb",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659d2a386a37ec202052ca6d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656e058b8c30579147623a4f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658d7aa55139e2e90ebdf368",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657e6d73cab7244e7d74c938",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655ca2e9984959b734ae929e",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6599355d56a21080a2779392",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6598dae356a21080a275ff05",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65731ad43a256680f509f80f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a2a674572f93ea4c738d87",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655b2472984959b734a75bc0",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659384470771f87efefb0ec3",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657fcc20cab7244e7d78645e",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65602af43b3a73509b0a547b",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65673e13b371188f1410f552",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65695e94b371188f141d9161",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65669e93b371188f1409551b",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656953cbb371188f141d05f6",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657d1f6fcab7244e7d72a595",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6567f9edb371188f14135e21",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a26154572f93ea4c730e3e",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655ed7dfd7c5b7ad6c73f734",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a505a5115b1da585952004",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6566a3e5b371188f1409a44c",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6571a3531987e25e258624cb",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65951e4556a21080a268f72c",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6569b791b371188f142155e5",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65573a83677fedf2af3db812",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657e51abcab7244e7d749b0e",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659667c056a21080a26dbbdb",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659f709928fe21a8cb0b0d4d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a4bfbec452b4fba5c6c80f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65560a6554091050341a9c81",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a214fe572f93ea4c71acf0",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658e449e5139e2e90ebf8bc5",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6569323bb371188f141b1172",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656b58eb6e702d09dcad92f5",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656077d83b3a73509b0da352",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65825a915139e2e90e95fef0",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658a2e745139e2e90eafe37c",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656048f33b3a73509b0b0ab1",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658e534b5139e2e90ebfece8",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658a444a5139e2e90eb0f498",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65798dfa3a256680f5254c83",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a3cda6572f93ea4c7639be",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6557861a677fedf2af3e9293",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6594deda0771f87efe03cb83",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6555d24b54091050341987aa",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6594c9150771f87efe02b473",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655ad7dc984959b734a4b6fb",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6597bc5856a21080a273c3f7",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6583fdd95139e2e90e9e4444",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6557b547677fedf2af3ed4f7",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6577c0513a256680f5148e32",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656da4568c30579147613070",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659e6541a54ffb895531e334",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6569519bb371188f141ce1da",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a342c6572f93ea4c73ff70",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a2a1db572f93ea4c737f42",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6566ba90b371188f140bae9d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65600c793b3a73509b08e2e5",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658694595139e2e90ea6b438",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659bad2856a21080a27cae7c",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65782a3a3a256680f51b6410",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6570366ef0c610ed1b72d9c9",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6562b29bb371188f14026a8f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65697769b371188f141e4a87",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655f7483d7c5b7ad6c7870a0",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6583956d5139e2e90e9a2fd9",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657c1ec0cab7244e7d70deef",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659e2e916a37ec202055c499",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656fe2350b62e45246541a27",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6594dffe0771f87efe03d843",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6582a8485139e2e90e988327",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658426e55139e2e90e9f3cf7",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6571783a746d4d9eefbd634b",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656056633b3a73509b0bbdac",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6594e1d20771f87efe03e87f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65602a0d3b3a73509b0a4e7f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655db2d0a3ebbd69b0c8114a",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a0d65d28fe21a8cb11f83b",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6568a250b371188f141a4c44",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65798ec23a256680f5254efa",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658104885139e2e90e9065e7",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659936d056a21080a2779595",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656ea91d8c30579147651319",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a6472038d54fed6ef16ee4",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656afda36e702d09dcad088b",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6582d9165139e2e90e99a6a7",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656bf2186e702d09dcae3ca1",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658ba1855139e2e90eb67944",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656eef0f0b62e452465183ee",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655b0060984959b734a5aeda",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658d17575139e2e90ebbb0ce",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658014855139e2e90e8e8899",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656aa72b673edc5b574cc9d2",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655b74cb984959b734a8e132",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6555f7ae54091050341a76b4",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65815a905139e2e90e934560",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a3afc9572f93ea4c75d7f4",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65812c795139e2e90e9179af",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65795af63a256680f5220f9b",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6598e78756a21080a2762b3b",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65682e26b371188f1415cc06",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657c1060cab7244e7d704436",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658001ab5139e2e90e8db626",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a1d22b572f93ea4c703520",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659686e056a21080a26f745d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657994813a256680f52560b2",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656015633b3a73509b09520d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655f2786d7c5b7ad6c77446a",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659fb2ec28fe21a8cb0d9186",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658019f95139e2e90e8eb1ea",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6572e1c63a256680f5096913",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659d1ef46a37ec202052b018",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655c797b984959b734adf151",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659e2daa6a37ec202055c16c",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65798f0d3a256680f525503b",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658913205139e2e90eacb31b",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6583f92a5139e2e90e9debec",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656e9d248c30579147648aaf",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655ec72807454fe5afc48076",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659b859f56a21080a27b64e2",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65600c6c3b3a73509b08e275",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658a2e6f5139e2e90eafe361",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657d4f00cab7244e7d73571f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656f30940b62e45246527e4f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658012585139e2e90e8e745a",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6567598bb371188f14116223",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655b5d92984959b734a88cc0",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655c39ad984959b734ab1b0f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a6449038d54fed6ef142bb",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65681b22b371188f14154120",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6568494cb371188f14178b40",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6575463c3a256680f50cf475",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6564115bb371188f1404f680",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656855a0b371188f14188a20",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657177bc746d4d9eefbd5d11",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6554ae09d9b030bfa45ffc76",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655c7a6b984959b734adf6eb",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658682fc5139e2e90ea663ad",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6566efddb371188f140db30f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a28d4d572f93ea4c735759",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6573ef4c3a256680f50b0c2a",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659dffca6a37ec2020543538",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657ad25fcab7244e7d6afe57",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658586e45139e2e90ea53218",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65696555b371188f141de2a6",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65583cd6677fedf2af3fc829",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65695d01b371188f141d7ba4",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6572919d3a256680f5072272",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658453b95139e2e90e9f9cf1",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65576af7677fedf2af3e41d7",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657d1fd2cab7244e7d72a6f4",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657281743a256680f50646c6",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655b5959984959b734a87e72",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6569640bb371188f141dd6ac",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657bb34dcab7244e7d6c8fa2",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65696827b371188f141dfcf7",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "659a57e856a21080a2789291",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65582ed5677fedf2af3f7480",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657bc235cab7244e7d6d3e6f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6569705ab371188f141e25af",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655c7a8b984959b734adf7df",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655dc1040a869296a4ad68fc",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65924aba5139e2e90ec57ced",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65695ee6b371188f141d960d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656d55836e702d09dcb395a8",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6566a58ab371188f1409c800",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6583ffed5139e2e90e9e64ea",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65585d805c50a1da629d0509",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655440493de2a96680b15aa3",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657a62903a256680f526a970",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658429cf5139e2e90e9f4214",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6597d77156a21080a274644b",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655c5dda984959b734ac0716",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6590314a5139e2e90ec4828e",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657a5fb23a256680f5268300",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65898e5d5139e2e90eaf8b19",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a21e15572f93ea4c71dfaf",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656960d3b371188f141da9da",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65694ac8b371188f141c7de5",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658148d55139e2e90e92443d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656abcce6e702d09dcab97d0",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a3e95f572f93ea4c766c0d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657f9bb3cab7244e7d763cf7",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655f15efd7c5b7ad6c7696ff",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6555c9f7fbfbe9529cebea5d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6566df3bb371188f140cbac2",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6562b4bfb371188f1402736b",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6594eb6256a21080a2679625",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6562b76fb371188f1402819e",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657f0462cab7244e7d75d88f",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a4b1d7c452b4fba5c68e63",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65563d4354091050341b1eb3",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65798d183a256680f5254950",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657d3eeecab7244e7d731b49",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65671663b371188f14100a9d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6566e6fcb371188f140d33e5",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657a60933a256680f5268e36",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65a5ea42115b1da58596df07",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656962a9b371188f141dc52b",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65826b4c5139e2e90e96a948",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "657f088ccab7244e7d75df12",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "656d75d26e702d09dcb4786e",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655c3583984959b734ab00cc",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655c8372984959b734ae354d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "658cfe8f5139e2e90ebb4f8d",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "6598d75656a21080a275eef7",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65619830b371188f140004fa",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65712d93ea266f4fe6aadbc3",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65617d65b371188f14ff7f49",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "65819c6d5139e2e90e948ef5",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655877505c50a1da629d62ed",
        "type_leavel_scholarships": 1
    },
    {
        "_id": "655f094cd7c5b7ad6c75c0c1",
        "type_leavel_scholarships": 2
    },
    {
        "_id": "658907105139e2e90eac6d0d",
        "type_leavel_scholarships": 2
    },
    {
        "_id": "65a0f83e28fe21a8cb13457b",
        "type_leavel_scholarships": 2
    },
    {
        "_id": "655e250507454fe5afc26b1b",
        "type_leavel_scholarships": 2
    },
    {
        "_id": "655d8327a3ebbd69b0c6a989",
        "type_leavel_scholarships": 2
    },
    {
        "_id": "656ac4106e702d09dcabb58b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bd690cab7244e7d6dfb31",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657819463a256680f519d05d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d9da78c3057914760f093",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eade707454fe5afc310de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655aaf9a5c50a1da62a25179",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596626c56a21080a26d6f55",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567497cb371188f141128ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656151bf3b3a73509b0f5a7b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a5c343a256680f5265a83",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657715283a256680f51376df",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657902f33a256680f51d1fb4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ebe798c3057914765731b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ca4859705a8d4ee1ee669",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bc458cab7244e7d6d50ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577e6093a256680f516f8a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65548f3cd9b030bfa45f5923",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566fcd0b371188f140ec484",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d5dd3a256680f515f279",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a6d563a256680f52722a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d77b6984959b734b0a9b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fb8b228fe21a8cb0dcce5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe88d0b62e45246546bd1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a8f52673edc5b574c30bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b83d256a21080a27b5e0b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec56907454fe5afc46d8c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c1071cab7244e7d704522",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ae53b6e702d09dcac7cef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a20da5572f93ea4c716eb6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659aaad156a21080a278d7eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588cfcd5139e2e90eaa6a1c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717dcf746d4d9eefbdafe7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c118c984959b734a9bc15",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eddcb8c30579147674cb9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d66435139e2e90ebdc766",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65547014ef5dbc91c849c32a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3c7e9572f93ea4c762b8f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65826b055139e2e90e96a430",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d7bbd6e702d09dcb4a6bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657672353a256680f50f0223",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565ddf1b371188f1407eea8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d091bffc32fa81eb49890",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc5d50a869296a4adb447",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658028335139e2e90e8ee569",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656db5328c30579147617ad8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e9ef18c3057914764a268",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65829b285139e2e90e97e906",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572a1223a256680f5078a17",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582b9795139e2e90e9937c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657552223a256680f50d0eec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f8a55139e2e90e9de05e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583e0b95139e2e90e9ca2f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b91995139e2e90eb5b32b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f7905139e2e90ea09d81",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65855f1f5139e2e90ea4bb25",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dbaf2a3ebbd69b0c8911d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65800f9f5139e2e90e8e5996",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559eec45c50a1da62a0ac0a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b682a56a21080a27a690e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b0b89e52111443bcc4be8c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657524a23a256680f50ca508",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e808c8c3057914762c447",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e49e65139e2e90ebfb3ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d27ad6e702d09dcb0d704",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65780bd43a256680f518a0ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65797f433a256680f524e2e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d353f6a37ec202052e532",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ebf1ccab7244e7d758c45",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a115dc572f93ea4c6f5d34",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659787d956a21080a2728981",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ae24e984959b734a51363",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571712d746d4d9eefbd1c1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fa01728fe21a8cb0c6c8e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658594fc5139e2e90ea5437c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff76dd4c5dae49672eca4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656de9708c30579147621243",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65660145b371188f14083381",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b22ae4591a87153242104c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bd6425139e2e90eb786f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ad087984959b734a45ec4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658009cd5139e2e90e8e1d84",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d49b3a256680f515e072",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f7ceb371188f140e4384",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657672143a256680f50f002b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577df973a256680f516a5ba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a2ad02572f93ea4c739ca8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b4ea7984959b734a8565b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fdcd70b62e4524653ccf7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d95bc8c30579147608b0c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65800e845139e2e90e8e4be7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d19adcab7244e7d728fb7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583b1745139e2e90e9b7c19",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a861a3678d000ab21b15bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e85805139e2e90ec12dfa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65602a1a3b3a73509b0a4eee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572719b1987e25e25878c98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f35ab371188f1412e820",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d9ccf8c3057914760e6eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656702a8b371188f140f2a39",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657813ee3a256680f5195785",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698a97b371188f141f11e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e14a36a37ec20205537bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717992746d4d9eefbd76ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6599237a56a21080a277631e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a9d105139e2e90eb3f3cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569d837b371188f1421c9e4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656066b03b3a73509b0cfd52",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656301dfb371188f14036b19",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e8a805139e2e90ec1668e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658676de5139e2e90ea647f4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6575472c3a256680f50cf678",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f413c0b62e45246529e63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657826bc3a256680f51b1541",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd6720b62e45246536132",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a7f2656a21080a278b672",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567ec2eb371188f141266de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656834d9b371188f14161026",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569f77eb371188f14221d94",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655310b03de2a96680affaa2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658150085139e2e90e929fd6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ba55456a21080a27c1c52",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0b87c28fe21a8cb10ead9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658be1a35139e2e90eb7fd2f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702ba4f0c610ed1b72032d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d5057cab7244e7d735cda",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d99848c3057914760c01e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655efedbd7c5b7ad6c752694",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b3efc6e702d09dcad73f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584ecf85139e2e90ea02baf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4f583d9fcd3564fb15e57",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fafcbcab7244e7d7711dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6557a3d5677fedf2af3ecc72",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d906f6e702d09dcb5dc68",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562b6e6b371188f14027efa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657912803a256680f51d983f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b1df3984959b734a6f8bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572d2183a256680f508c9b1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65824b335139e2e90e9543d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694c4db371188f141c944c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703215f0c610ed1b7289ba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc3070a869296a4ad9747",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65585cd95c50a1da629d0298",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b6132984959b734a89bd1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ea6d58c3057914764fa7a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a2123a572f93ea4c71981d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe991d4c5dae496722c66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598d09356a21080a275c566",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65619522b371188f14fff830",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659285255139e2e90ec596f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961e4c56a21080a26b73e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1147e572f93ea4c6f5529",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bd266cab7244e7d6dd9dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576de923a256680f512c1f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577cdc73a256680f51576ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e93c88c3057914763e51e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680bb6b371188f14149fa4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656961a4b371188f141db35e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d4f23a256680f515e6e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b10a4984959b734a61fec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c20f76e702d09dcaefe1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657190cb1987e25e2585652b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fdbfccab7244e7d78ad68",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658905675139e2e90eac60da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656abb636e702d09dcab9237",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573dffd3a256680f50aceea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65773d483a256680f513b91f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9f5e5139e2e90eb65f72",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569e150b371188f1421e5d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6587c0b85139e2e90ea9b879",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583aef45139e2e90e9b5858",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fb72d28fe21a8cb0dc1c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598f85d56a21080a2766f20",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576cf763a256680f5122a45",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596681d56a21080a26dc108",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65543f973de2a96680b15279",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655995f25c50a1da629f8ea7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657696c23a256680f5104f5b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d7cc3a256680f5161729",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c7041984959b734ad9ede",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0f62928fe21a8cb132a49",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65603c9c3b3a73509b0ab1c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dea7e8c30579147621375",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b0b7d984959b734a5f5cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8c918c3057914763621c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65621583b371188f1401e643",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a75143a256680f5277afa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594dc0d0771f87efe03acf3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65617cf8b371188f14ff7cff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659669c156a21080a26dd46a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c25e3a256680f514acc2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9a98673edc5b574c6d81",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712dbfea266f4fe6aaded1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657818223a256680f519b765",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569ab0bb371188f14210cdf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c9d75984959b734ae88ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d29925139e2e90ebc5c7d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3e8ce572f93ea4c766ac3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658247875139e2e90e952a51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657677083a256680f50f3f5d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656850f5b371188f141837e6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658101235139e2e90e903d7b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a3b328fe21a8cb0fa37e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b8d2756a21080a27b7df1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f26bcd7c5b7ad6c7740ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655832df677fedf2af3f8a4d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570355cf0c610ed1b72c971",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8b6e8c30579147635277",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9f2660fe49b1a45797400",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658103be5139e2e90e905a1b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a89bb72c13221eb29e56df",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8c578c30579147635ec7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656083913b3a73509b0dd42b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d635c984959b734afd9ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e5459a54ffb89553119e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bacf356a21080a27caaa8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65982aea56a21080a274e640",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da691a3ebbd69b0c793e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597807d56a21080a2724caa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659220795139e2e90ec55212",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657677423a256680f50f429e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566ac19b371188f140a2bcb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eefc8d7c5b7ad6c749948",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fbbdb371188f1413849f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702d56f0c610ed1b72279c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8dfaf2c13221eb2a0f8ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d2d43a256680f515c674",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65681926b371188f141533e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657acea6cab7244e7d6acd94",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b210e984959b734a71483",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65585ac35c50a1da629cf1de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa84f70fe49b1a457e4780",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656aa25b673edc5b574ca435",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584dd225139e2e90e9fcd35",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566ffd5b371188f140efa22",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657062d3e46926eabf1a8119",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6564bdffb371188f14063e43",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572ca043a256680f50874d6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597e68856a21080a2748059",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579b8cc3a256680f525b60a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9b8d5139e2e90eb62ec8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657312963a256680f509e6db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593bd180771f87efefc9518",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656063b63b3a73509b0cd0ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a9c2756a21080a278cc1c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656173cdb371188f14ff4a75",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657674663a256680f50f1c09",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eadfe8c30579147652bbd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc6bd0a869296a4adbebd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598cc8b56a21080a275af36",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f4a9b371188f1412fd57",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a441e5139e2e90eb0f0b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655190f13de2a96680af7561",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65765ffe3a256680f50e4483",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b89c8984959b734a90a57",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65706175e46926eabf1a7d58",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6563664db371188f14043989",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a8d4f3a256680f528619d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6589473f5139e2e90eae79de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712ca0ea266f4fe6aacd4b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695dffb371188f141d87d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0b27528fe21a8cb10b392",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f4996d7c5b7ad6c78017b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655808af677fedf2af3ef685",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fa9a228fe21a8cb0d19aa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65672517b371188f14107c58",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e49305139e2e90ebfae4f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ecce98c3057914765ecb5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657feeb1cab7244e7d790961",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655a00115c50a1da62a0f656",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d85b96e702d09dcb53121",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65689dedb371188f141a3b13",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a38c36572f93ea4c7539a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d37706e702d09dcb1bdbd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576757b3a256680f50f2c8f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6590d62b5139e2e90ec4b37b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a8be4673edc5b574c1c55",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658c564d5139e2e90eb9618a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656987c2b371188f141ee935",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65768abc3a256680f5101c9a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555a13cfbfbe9529ceb1565",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d2b945139e2e90ebc7455",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe4fb0b62e45246543fb9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e4d96a54ffb895530cb6d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c6e516e702d09dcb0076f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d86006e702d09dcb53637",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6578304c3a256680f51bc535",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c09376e702d09dcaeb50b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65824a4b5139e2e90e953c83",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656154b73b3a73509b0f6b4c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656845d3b371188f141749b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a48a04572f93ea4c76f3f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65966a2b56a21080a26ddac1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d8daea3ebbd69b0c70d69",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b5f8fb84d8003638a709fb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1efc4572f93ea4c708eca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568020db371188f1413ea01",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656abd366e702d09dcab9975",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1038728fe21a8cb13d406",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6589449f5139e2e90eae5f51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566ea98b371188f140d66bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659662bf56a21080a26d73b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658160d45139e2e90e9392d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658679495139e2e90ea64b30",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b55376e702d09dcad8ef9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568172cb371188f1415227b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ac0f85c50a1da62a2ebab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596d97756a21080a2701b85",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e4e4ea54ffb895530d10e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658245485139e2e90e9520e6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65765e4b3a256680f50e3788",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a8ab45139e2e90eb33eb3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583ac895139e2e90e9b35ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bfdd4cab7244e7d6ed2b5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e9c9d8c30579147648126",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65701309f0c610ed1b70b17d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e7ebd8c3057914762b2f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566b3bbb371188f140affa4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b643d56a21080a27a2da2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eb93307454fe5afc3ba54",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b1ba5984959b734a6e315",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717e39746d4d9eefbdb8f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65606fcd3b3a73509b0d6862",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eeed00b62e452465180bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65780f863a256680f518e536",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c6c23a256680f514ec76",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65582cb3677fedf2af3f6abf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff84fd4c5dae49672f44f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658254815139e2e90e95b7ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655425963de2a96680b0c1db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff2bbd4c5dae49672af5b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566e12cb371188f140cdbaf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561b3aeb371188f1400ca40",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65701f57f0c610ed1b7143f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554ea99d9b030bfa46110a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572fd6a3a256680f509c85f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fb8b9cab7244e7d77924c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684841b371188f141778e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a28c47572f93ea4c73529c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eddf18c30579147675037",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d601f6e702d09dcb3eafd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655866e15c50a1da629d310e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ec9768c3057914765bd88",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0d62a28fe21a8cb11f607",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65671516b371188f1410004f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c057acab7244e7d6f8789",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f97fb371188f141356ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570770ce46926eabf1abaca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657924553a256680f51ed4a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702e86f0c610ed1b72414e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694b74b371188f141c86bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cc0d99705a8d4ee207b19",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656edfb98c30579147676ec0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e79e5a54ffb8955324e6a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6575504b3a256680f50d0b42",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65602e2a3b3a73509b0a6960",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d8558a3ebbd69b0c6c197",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e96e38c30579147642553",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656da0618c305791476109a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65950af656a21080a2682ada",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65719dfe1987e25e25860371",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d62386a37ec2020534c3f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562de81b371188f14030733",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597c51656a21080a2740896",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db090a3ebbd69b0c7f51c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655a02ad5c50a1da62a0fe46",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bbaa956a21080a27db3a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d286d6e702d09dcb0ddea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6589437a5139e2e90eae5703",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ad6036e702d09dcac10cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703dc4f0c610ed1b7371c8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b55ba56a21080a2796566",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f5426a54ffb8955341250",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695da5b371188f141d843d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c9e33a256680f511eebc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bc5fbcab7244e7d6d5dca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ca2e39705a8d4ee1ed86b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657077d9e46926eabf1abd81",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656152233b3a73509b0f5cbf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dee078c305791476219a1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4b0d1c452b4fba5c686d4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561667b3b3a73509b0fe491",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db061a3ebbd69b0c7f2ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596586856a21080a26cf1b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bc2b556a21080a27e340b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0b4f928fe21a8cb10ce35",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560b5763b3a73509b0eab5b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65641b18b371188f14051857",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554c0ead9b030bfa460514c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657116e8e46926eabf1b5d80",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65562eb854091050341b074a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573f1873a256680f50b1555",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f496ca54ffb895533b1e4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65640772b371188f1404c9b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657686353a256680f50ff421",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ac5c65139e2e90eb45d80",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561652b3b3a73509b0fdae1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8dc872c13221eb2a0b3d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d0e72cab7244e7d724d45",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f643728fe21a8cb0aa4e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655acb1e984959b734a421e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558e22d5c50a1da629e7888",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65675326b371188f14115228",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65813cf65139e2e90e91df31",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961e1f56a21080a26b711f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65575c04677fedf2af3e13aa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0f53128fe21a8cb131d98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8612d678d000ab21b159b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af73d1fe16fbc49627b5fa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f907b371188f14134d6b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e6744cab7244e7d74bc45",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65548124d9b030bfa45ec8c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a50cd5139e2e90eb19673",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9acb5139e2e90eb627c9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655734ce677fedf2af3da3dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c6f6f6e702d09dcb00afa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65657756b371188f1406f436",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a894f02c13221eb29dddd7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576d65a3a256680f5127b61",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec04507454fe5afc42f93",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a75e5038d54fed6ef6c701",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655467203de2a96680b21836",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d863ba3ebbd69b0c6cabb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c01446e702d09dcae96f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c61b6984959b734ac8745",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fcb90cab7244e7d78602e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561b9f1b371188f1400fa4a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594db520771f87efe03a5ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe0b50b62e4524654071a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583ef355139e2e90e9d3992",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c3476cab7244e7d7133cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ccd33984959b734af19a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657687963a256680f51001c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f6bbb371188f14132031",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a09ca928fe21a8cb0f47b4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c9a516e702d09dcb055ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65574286677fedf2af3dcb01",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656161043b3a73509b0fbfe7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597b56a56a21080a27387af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bf4a55139e2e90eb8a134",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a383c5139e2e90eb03fb5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b95025139e2e90eb5e526",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd5f10b62e45246535847",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e07566a37ec20205483d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6578297d3a256680f51b52a8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4e757e32fc2fd7e7704aa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65616af23b3a73509b100499",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e9e318c30579147649831",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ce1f65139e2e90eba679c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658150495139e2e90e92a367",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a69bff38d54fed6ef4064d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b780e5139e2e90eb4c5eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fefaad4c5dae4967282d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65606f483b3a73509b0d654a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a9b135139e2e90eb3e346",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596689a56a21080a26dc6e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572ef983a256680f509ad7f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cabe49705a8d4ee1f4486",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e58f9a54ffb8955314ec3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65951fd156a21080a2690654",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fdba128fe21a8cb0e4365",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b087c5fe16fbc4962f49c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569af24b371188f14212a53",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ffff85139e2e90e8d9d18",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567ef6fb371188f14129d7c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d7b8d984959b734b0cf0f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560487b3b3a73509b0b006b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657977803a256680f5245c09",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65674437b371188f1411119c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657128aae46926eabf1bf197",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561b932b371188f1400f55a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e659aa54ffb895531e74a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d94de8c30579147607e8b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569b4ebb371188f14214a15",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596683156a21080a26dc227",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65856cd05139e2e90ea4f9be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b6ae156a21080a27a91b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65adc5570fe49b1a4585af08",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f8a7b371188f14134419",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ea9de5139e2e90ec21f2a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658006175139e2e90e8df8f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d4ced6e702d09dcb322cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65682c05b371188f1415b966",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680f87b371188f1414d0c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c4ae3cab7244e7d716999",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657129f3e46926eabf1bffc1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6599082456a21080a276bb8f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b38e8b0b404a49855d8944",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65791bb03a256680f51e323c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659763dd56a21080a270ca8b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c2105984959b734aa4e93",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65755ee53a256680f50d270f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554d7a5d9b030bfa460c66c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659509f056a21080a2681b85",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6590face5139e2e90ec4dcac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65701ed2f0c610ed1b713bbc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65962da456a21080a26c08bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555a02efbfbe9529ceb0f61",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d87066e702d09dcb54695",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65782a103a256680f51b5fb0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a39865139e2e90eb04f3d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558b7f55c50a1da629e2ae8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab506cab7244e7d691214",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655daa29a3ebbd69b0c7b1bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657286d43a256680f506a8d5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65707e9be46926eabf1aceaa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fdc12cab7244e7d78adcf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566abe0b371188f140a2657",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65633a41b371188f1403e2a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559d8405c50a1da62a077a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576cb573a256680f511fe1d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ebb3207454fe5afc3de1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ae21a4fe16fbc4962044d6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65816e4d5139e2e90e94011f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656800b9b371188f1413d8f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684f56b371188f14181982",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fb100cab7244e7d77219c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bb6adcab7244e7d6cb30c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65585fa75c50a1da629d1023",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db181a3ebbd69b0c7fefe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658176d15139e2e90e942514",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d7e7d6e702d09dcb4be15",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571292be46926eabf1bf789",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683af9b371188f14167294",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65559014d9b030bfa46255a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659911ab56a21080a2770450",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593c0480771f87efefcbf63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65894a215139e2e90eae9c97",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657025b7f0c610ed1b71a490",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aca05cab7244e7d6a991e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569e01fb371188f1421e0fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569898fb371188f141f02b4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583eb085139e2e90e9cfeba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cb0589705a8d4ee1f8991",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bab3556a21080a27c8861",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656162ae3b3a73509b0fcbd6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ffd3cd4c5dae496731425",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8d4072c13221eb2a02fc8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581562c5139e2e90e92fde9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655762aa677fedf2af3e25c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c4a0f6e702d09dcafb995",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fdd000b62e4524653cfc8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65577fae677fedf2af3e824e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a63f0d38d54fed6ef0f2cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570210ff0c610ed1b71633c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680161b371188f1413e1b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c5fa0cab7244e7d71958f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656983b1b371188f141eb9a8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577db1d3a256680f516577f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65758cfc3a256680f50d71e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a79603a256680f527bcaa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ff098d7c5b7ad6c78c3ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8ab38c30579147634615",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579b4203a256680f525a787",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ed64dcab7244e7d759ebf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db340a3ebbd69b0c818d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657677483a256680f50f434c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f988828fe21a8cb0c0fba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ec25e8c305791476588bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65558325d9b030bfa461fedf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555741ad9b030bfa461ae48",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658c3cb45139e2e90eb94476",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585397f5139e2e90ea34231",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a63cc56a21080a2789aa2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fecc3d4c5dae496725990",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594c42b0771f87efe027745",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598f74c56a21080a2766a93",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656574d6b371188f1406eab2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555e5a254091050341a1cc7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584e9a85139e2e90ea011f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656efbff0b62e4524651fb06",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f539b371188f1413060c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586bbfd5139e2e90ea8b46a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566aa5eb371188f140a0df5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e970d8c3057914764284a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a787c538d54fed6ef7ec89",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dac32a3ebbd69b0c7c627",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aba69cab7244e7d698427",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eb68707454fe5afc39086",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571a2871987e25e2586219c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596119856a21080a26ad149",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65792a403a256680f51f2a14",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556d63854091050341bda98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597b65056a21080a2738cf3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ef5d7d7c5b7ad6c74ca4c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555d6fa540910503419af7e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8e0c92c13221eb2a10df9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65752ccf3a256680f50cb794",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a36b31572f93ea4c7492da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684760b371188f14176e25",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65548ff5d9b030bfa45f5cd4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c47ed984959b734ab6db4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6589a9055139e2e90eaf9bf2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65963bf656a21080a26c5c0f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ada6c6e702d09dcac28d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577ce453a256680f5157df0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f5b79d7c5b7ad6c783db2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717dce746d4d9eefbdafa9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a9ab28fe21a8cb101cb7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670262b371188f140f243e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a14086572f93ea4c6fdc64",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565abd0b371188f14078491",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65674bd4b371188f14113334",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c8a23a256680f51517e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f23b5139e2e90ea05eba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e95608c3057914764046b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597b9ee56a21080a273ad94",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583cbe95139e2e90e9c1103",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657183b6746d4d9eefbe1796",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a390b0572f93ea4c7546bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795b113a256680f522112d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c2c63a256680f511816f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d79696e702d09dcb493d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655cbcdd984959b734aee29f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795a073a256680f5220129",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566cc6eb371188f140c4059",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577bbea3a256680f51451bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d69bb984959b734b016a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656099083b3a73509b0e1d43",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a8fed673edc5b574c336e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656705a8b371188f140f6313",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65855c235139e2e90ea4a593",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a8ff1673edc5b574c338d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658275785139e2e90e96e503",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b25c5984959b734a76aa3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584ee585139e2e90ea03427",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da289a3ebbd69b0c77c9e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65975afd56a21080a2706e1e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dd44207454fe5afc168ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fae6428fe21a8cb0d50b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c0024cab7244e7d6efbe7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65681312b371188f1414ffc3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a7855138d54fed6ef7d7a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561f47bb371188f1401ac21",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593e0340771f87efeff2bf3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65713239ea266f4fe6ab2420",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597764d56a21080a271b5f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658f8cde5139e2e90ec333a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d0c0affc32fa81eb4b6ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588ce5e5139e2e90eaa669b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bde93a256680f51139f4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aa6c13a256680f528df16",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581564a5139e2e90e93003d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af63fffe16fbc49626afc5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657151bae1c4488437cfe1ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1078d572f93ea4c6ed56e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d0045ffc32fa81eb41326",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554b7add9b030bfa4602eeb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712cc9ea266f4fe6aacf8f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fae1928fe21a8cb0d4ddf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e3af85139e2e90ebf3e9c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657804c33a256680f5181949",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593d0850771f87efefe0e00",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655cd8b3984959b734af2bdb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695eadb371188f141d931f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656578ebb371188f1406f7b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bfdb76e702d09dcae8105",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a6a18938d54fed6ef40f8a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657282913a256680f5065d20",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed4308c305791476674a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65615aeb3b3a73509b0f9147",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658c2ce45139e2e90eb92618",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1011528fe21a8cb13b677",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65922e1c5139e2e90ec56649",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655606a054091050341a96b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569830bb371188f141eb046",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655763c1677fedf2af3e296c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656942d7b371188f141beb71",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a38f5a572f93ea4c7543b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655710bcfb19a42233c4d367",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c0833a256680f5115ddd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65898bf75139e2e90eaf8547",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a35aa1572f93ea4c74635e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577cec93a256680f5158715",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a6e228fe21a8cb0fe304",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961aca56a21080a26b454f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3dbd9572f93ea4c7651d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577b4d53a256680f5140969",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594ea0b0771f87efe04124c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c4e44984959b734ab9970",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555beabfbfbe9529ceb94e4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655972695c50a1da629ee2b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65796e403a256680f523b7c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d96128c30579147609094",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ee1add7c5b7ad6c744bdc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659924e556a21080a27767f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695581b371188f141d20bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d65715139e2e90ebdc63d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc43a0a869296a4ada424",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0901a28fe21a8cb0eee3d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65572010c7b5a7b1f34f7e9b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d34096e702d09dcb18666",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ecc918c3057914765e75b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65963a5156a21080a26c555f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577cfc73a256680f51597dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65966ca156a21080a26dfc45",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65617dfcb371188f14ff825d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a4c8e5139e2e90eb16a46",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8ced8c30579147636691",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658543515139e2e90ea3b403",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bcfe7cab7244e7d6dc3a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fdead0b62e4524653e7cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ee2ed8c30579147679fcd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e6493a54ffb895531dd5c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bbbae56a21080a27dc2f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655962ad5c50a1da629eb86e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657810aa3a256680f519047e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a5c6456a21080a278969f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ca7446e702d09dcb0610e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655982ba5c50a1da629f30da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594e4430771f87efe03f986",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bfbfa6e702d09dcae7271",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568040bb371188f14141ec9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c23a5cab7244e7d70f8c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d4d0b6e702d09dcb32404",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d3de45139e2e90ebd4c96",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572cd7b3a256680f5089bc9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c0e63a256680f5081651",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657125fbe46926eabf1bcc4c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65615ced3b3a73509b0fa028",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65700b0ef0c610ed1b7081a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd2fc0b62e4524653352a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3d78a572f93ea4c764b27",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ecc3a8c3057914765e13d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656065253b3a73509b0cead6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bf7a95139e2e90eb8b725",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65782e693a256680f51baf22",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d2d865139e2e90ebc86c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d1c53a256680f515b6cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659373740771f87efefa3288",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d5a0d6a37ec2020533c46",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65859b155139e2e90ea54796",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6589473f5139e2e90eae79fe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584ec3a5139e2e90ea025ef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656069693b3a73509b0d1f80",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f9ef328fe21a8cb0c5db5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c38506e702d09dcaf6d37",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a36941572f93ea4c748c44",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d9235a3ebbd69b0c72825",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65826f5b5139e2e90e96ca24",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a83d45139e2e90eb2d947",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656422c0b371188f14052c95",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c5803984959b734abddfd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ec9ba8c3057914765c118",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698fafb371188f141f5d65",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8e2302c13221eb2a120e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b945e5139e2e90eb5db2d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a387f3572f93ea4c752849",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555d1665409105034197dcd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da7a8a3ebbd69b0c79b42",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e090b6a37ec202054996a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fa996cab7244e7d76c758",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db5b8a3ebbd69b0c83eb7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656066f93b3a73509b0d015e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65547bf4d9b030bfa45e86b5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65565a1b54091050341b34dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658be64c5139e2e90eb81b53",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4de02e32fc2fd7e769346",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cc8155139e2e90eb9964c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65688865b371188f1419ca5b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582a1025139e2e90e982ece",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659031135139e2e90ec481d6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fe67b371188f1413b42c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f916f28fe21a8cb0bc00c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65800a5f5139e2e90e8e220f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659baa3d56a21080a27c72c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703fbef0c610ed1b738a5c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e5b5fa54ffb8955316f17",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65854fd85139e2e90ea4437d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65752c613a256680f50cb6a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65718bf31987e25e258520c0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566fd5ab371188f140ece09",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577cb573a256680f5154f90",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b59ba984959b734a87fcc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65617eddb371188f14ff8662",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585289f5139e2e90ea29c5e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582a4665139e2e90e984eeb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560c12e3b3a73509b0ed4be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595051256a21080a267f948",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657123bfe46926eabf1bb46b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c1e6d984959b734aa3369",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568438eb371188f14171387",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554d2c9d9b030bfa460ae5f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cc0a69705a8d4ee2078b5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a37d93572f93ea4c74d76c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695584b371188f141d20ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9b90673edc5b574c76d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65782cf83a256680f51b9a76",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658f854d5139e2e90ec31428",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f55efd7c5b7ad6c782f9c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657292e53a256680f5072ed1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582969c5139e2e90e97a7f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596546356a21080a26cbf00",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65990ca956a21080a276db63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657916033a256680f51dcd75",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695fd1b371188f141da071",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bd47d6e702d09dcadbac2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aad7e3a256680f5292518",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65654333b371188f14066b2d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658012fa5139e2e90e8e78c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656058ae3b3a73509b0bdaf1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c2853a256680f5082bc6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c710e984959b734ada9e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a0bfb371188f14207b5f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed9408c3057914766fede",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8bd98c305791476358e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ebcb907454fe5afc3f764",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bf6bf6e702d09dcae50ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576ba703a256680f511139b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f1673d7c5b7ad6c769c0f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656adef56e702d09dcac4cf7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562f566b371188f14034d7b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e6c75a54ffb89553220e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593d8040771f87efefeaea7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bc0075139e2e90eb6f393",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658fa81a5139e2e90ec3935c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655702a9fb19a42233c48a8b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554a17cd9b030bfa45fc793",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555e5bd54091050341a1d82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657b0c02cab7244e7d6b9abb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65584eec5c50a1da629caf9a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b623a184d8003638a95060",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a388156a21080a2786324",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0f86828fe21a8cb134803",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eb6b88c30579147655182",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65581937677fedf2af3f206a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e90608c3057914763a0ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597b13556a21080a2735ce6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659782b056a21080a272676f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cafe45139e2e90eb96ca8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65658e2fb371188f14073101",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b7b6656a21080a27b3f86",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657158d5e1c4488437d004b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f1efb371188f1412c800",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65900c895139e2e90ec45551",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65811e895139e2e90e914d2d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a88582678d000ab21baf88",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65659d14b371188f14075414",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581c69d5139e2e90e94d005",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ed10b5139e2e90ec2838a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717138746d4d9eefbd1ca0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e20df07454fe5afc265c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566a1a9b371188f1409852b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bb22acab7244e7d6c840a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655cb277984959b734aeb66b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65622aa2b371188f1401f689",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e956b8c30579147640501",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65844f205139e2e90e9f94dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65745c993a256680f50c255f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab7d9cab7244e7d695378",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed4bc8c3057914766876e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656063383b3a73509b0cca09",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f46db371188f140dff47",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702830f0c610ed1b71ca7d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eac828c30579147652451",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a638d3a256680f526b7f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577bae53a256680f5144543",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65976f0556a21080a2715274",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560617d3b3a73509b0cb10f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65537f983de2a96680b069dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559c7ed5c50a1da62a031b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d0805ffc32fa81eb4814c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65557235d9b030bfa461aa51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597757856a21080a271abfb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65827b545139e2e90e972381",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571c7141987e25e2586b426",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583c9f55139e2e90e9c0a0f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e4c39a54ffb895530bdb4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a993b3a256680f52884fb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658698bb5139e2e90ea6f4c8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0ea6728fe21a8cb1288dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556042254091050341a910e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d3c4bcab7244e7d730fef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bf153a256680f5114a1d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e971a8c3057914764291a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65605b0c3b3a73509b0c070f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ef9a2d7c5b7ad6c74f0c0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658906b05139e2e90eac6b66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db5baa3ebbd69b0c83ed5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593733a0771f87efefa2e02",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fc17acab7244e7d78124f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577f6023a256680f5178625",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65693bfab371188f141b7193",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657688fe3a256680f5100fd6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597bb6856a21080a273baaf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1141d572f93ea4c6f50dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554d804d9b030bfa460c7bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658539c55139e2e90ea344d6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598f43056a21080a2765d9d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8da172c13221eb2a08eac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556f67afb19a42233c4666d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566fd11b371188f140ec817",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566fbf8b371188f140eac27",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573ddf03a256680f50ac631",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65793b023a256680f5203442",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65653bdab371188f14065ece",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65857f1b5139e2e90ea523ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597b7da56a21080a2739b7a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717759746d4d9eefbd57bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b8a7a5139e2e90eb55b54",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65584fa45c50a1da629cb2c0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b505b56a21080a2792da2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a13b8c572f93ea4c6fd45f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65800fed5139e2e90e8e5d2f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e08376a37ec2020548ef5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed8cc8c3057914766f87e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b710956a21080a27ad60f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585017f5139e2e90ea11828",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658015ee5139e2e90e8e93e4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bcaf6cab7244e7d6d9394",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555fd4354091050341a823b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680b8bb371188f14149d6b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596534256a21080a26cb736",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a6290d0e54b1e5e0fce1fb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f8c5628fe21a8cb0b9dcd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65682442b371188f14157b9b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ba5e8cab7244e7d6c2186",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a6c5b371188f1420d64d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8aa972c13221eb29f23dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556394154091050341b1a73",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d6c83cab7244e7d73cf39",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683e4eb371188f1416a917",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657edbedcab7244e7d75ace3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65841e825139e2e90e9f24f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659802ff56a21080a274b94c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec66d07454fe5afc477b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65669788b371188f1408e190",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65791a853a256680f51e1b45",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a73b1938d54fed6ef52279",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bbfc956a21080a27e06f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566c041b371188f140beb95",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655718b5d95852af9259b547",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657115bae46926eabf1b599b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0e83428fe21a8cb126e72",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702e64f0c610ed1b723ea6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65756ad33a256680f50d2f35",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658547d95139e2e90ea3e846",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d2bf25139e2e90ebc779d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e0c346a37ec202054c21e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e6f6aa54ffb8955322a91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a9bbb3a256680f5289372",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795a3e3a256680f5220422",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65673db9b371188f1410f375",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8da9f2c13221eb2a094f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e65eaa54ffb895531ea5d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a7bfb5139e2e90eb2671b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fcf48cab7244e7d787931",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566b888b371188f140b87dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555a1f9fbfbe9529ceb1add",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655acd84984959b734a43bf9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656968cfb371188f141e029a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f0995139e2e90ea04a2c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657687483a256680f50ffea3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560b4113b3a73509b0ea82a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ba9785139e2e90eb6aa0b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656098dc3b3a73509b0e1cbc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659768c056a21080a27104bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db3b9a3ebbd69b0c82102",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65817f905139e2e90e9441e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657699c73a256680f5105f86",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cd947ffc32fa81eb2d24c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657802903a256680f517fd71",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65711a1de46926eabf1b6ae3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65681216b371188f1414f2f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572d78a3a256680f50904f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a2324b572f93ea4c722a7b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65656836b371188f1406c234",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0b34c28fe21a8cb10bc35",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65967c6656a21080a26ef909",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ebfdf07454fe5afc4284f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657819133a256680f519cbf0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657432963a256680f50bdb70",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ab7c780fe49b1a4580b713",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655570a4d9b030bfa461a32b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65688915b371188f1419ccab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656893f7b371188f1419fd2c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8e278c30579147638295",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562fed0b371188f140360de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657570c13a256680f50d36b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657972723a256680f524040e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657915053a256680f51dbf7e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694373b371188f141bf6bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658916395139e2e90eacbb70",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598b11556a21080a2751fe1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65718be01987e25e25851faa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b203d6e702d09dcad4201",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a20631572f93ea4c712705",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db446a3ebbd69b0c827ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65978f6556a21080a2729f9f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565ff3cb371188f14082fc2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702575f0c610ed1b71a020",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eb84c07454fe5afc3ad73",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656cfef06e702d09dcb08a66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577e1483a256680f516c0d0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d71afcab7244e7d73de27",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594bb800771f87efe0216e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555a22cfbfbe9529ceb1cb4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8e798c30579147638984",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a09e9428fe21a8cb0f5a1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65606a683b3a73509b0d321a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d037effc32fa81eb43ce3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554b950d9b030bfa4603557",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656edd308c30579147673fd2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e4b2e5139e2e90ebfbb27",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ebb39cab7244e7d75846c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576aee03a256680f510b0d0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dce8107454fe5afc13562",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bdc245139e2e90eb7c986",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572d7703a256680f5090445",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c78d3a256680f5085dc8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65577d7c677fedf2af3e78b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65546b573de2a96680b225bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658190245139e2e90e94752e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a98983a256680f5288389",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566c79db371188f140c2873",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658001835139e2e90e8db337",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588e1ad5139e2e90eaae08d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65556d7ed9b030bfa46194cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b2b2d984959b734a7ab6e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588e39f5139e2e90eaaf13d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b20d25bcf66261a4fc2542",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657acfa7cab7244e7d6ad718",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657917213a256680f51ddf5d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a753cb38d54fed6ef66dc8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9e525139e2e90eb651ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658fcd095139e2e90ec3f5ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f36b6d7c5b7ad6c77ad28",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65791d1e3a256680f51e4aef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d982f8c3057914760b0ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658145e35139e2e90e922112",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65814b295139e2e90e9262f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577f40d3a256680f517711f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565eaeeb371188f14080cb1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d6cd0984959b734b03113",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656febc8d4c5dae496724cf9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ad722984959b734a4ab98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bd3dbcab7244e7d6de720",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555c987fbfbe9529cebe732",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d2bf8cab7244e7d72d12a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa553c0fe49b1a457d6e80",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bcb325139e2e90eb720ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c12456e702d09dcaed1e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65962df556a21080a26c0af2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d46e7cab7244e7d733b94",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b0841efe16fbc4962ef442",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e79608c30579147628577",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bd6bd6e702d09dcadbdf1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65681101b371188f1414e46f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cf7805139e2e90ebb2d53",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656cb1ab6e702d09dcb0695f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eef260b62e4524651856f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659414ab0771f87efeffb13c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561574a3b3a73509b0f791d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af37b6fe16fbc4962553ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6563ef50b371188f14047dbd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680fcfb371188f1414d48c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658554f05139e2e90ea479f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597cbbe56a21080a2743579",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584deb95139e2e90e9fd2ef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed2a58c3057914766517a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65893bfb5139e2e90eae0ba9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670005b371188f140efd9f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65824b705139e2e90e954607",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65700d7af0c610ed1b708b39",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657042ddf0c610ed1b73a555",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cfbb2ffc32fa81eb3cf40",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d82e56e702d09dcb504c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f5349a54ffb8955340881",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657023a2f0c610ed1b718353",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65937f550771f87efefada1f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ac91fe0fe49b1a45830808",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af797bfe16fbc496284588",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa74900fe49b1a457e0dc6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588e5d85139e2e90eab0ab9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8fbaf0fe49b1a45770d9b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566cc3eb371188f140c3f75",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f0efb371188f140dc378",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658112dc5139e2e90e90fd5d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566ea7fb371188f140d64ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65815dbe5139e2e90e9369ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da8c5a3ebbd69b0c7a401",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fa7d928fe21a8cb0cfe4c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657128a7e46926eabf1bf162",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65642a3eb371188f14053c35",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65616f9fb371188f14ff2a2b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656989ceb371188f141f0652",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bf3426e702d09dcae4158",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656016853b3a73509b095ca1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe3070b62e452465426d6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a55b456a21080a2788de2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579110b3a256680f51d8625",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c3e066e702d09dcaf8a47",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580142c5139e2e90e8e8611",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566b5c4b371188f140b41c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684a4fb371188f1417a1b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658104865139e2e90e9065d5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff3fad4c5dae49672c01e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65824f925139e2e90e956b45",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598111c56a21080a274cf92",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a9fb05139e2e90eb40569",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6599660656a21080a277e3da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da638a3ebbd69b0c791d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f5a7c28fe21a8cb0a25a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c51a8cab7244e7d718073",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65605e0f3b3a73509b0c50a5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561a09db371188f1400430b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b769056a21080a27b1418",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559dc915c50a1da62a0809c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576d8993a256680f512912e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577b2d83a256680f513fe31",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d79ee984959b734b0c02f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656068f23b3a73509b0d1a63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fcab328fe21a8cb0e28e6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a7a205139e2e90eb2598f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a620d50e54b1e5e0fc88b1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579aaff3a256680f52591f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65975d6856a21080a270810a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bf3bf6e702d09dcae4455",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655326e83de2a96680b013f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565578bb371188f14069097",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65853aed5139e2e90ea352fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a122bd572f93ea4c6f9091",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577f1533a256680f517590b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581bc835139e2e90e94c4b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961d1756a21080a26b6372",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65962f3056a21080a26c142d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed12b8c30579147663836",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657095b8e46926eabf1b1c2a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571e9661987e25e2587238f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a5d602115b1da585963b2a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b06398fe16fbc4962c4c67",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d79e7984959b734b0bfd7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ea6225139e2e90ec218a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570709fe46926eabf1aa4ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65718360746d4d9eefbe1304",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fee89d4c5dae4967273c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65967d5d56a21080a26f0735",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658291295139e2e90e977a21",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65792e0a3a256680f51f8475",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e5eab5139e2e90ec01231",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558138a677fedf2af3f0ea5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c0d99984959b734a99af4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f95cc28fe21a8cb0bf045",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fdcb90b62e4524653cb6b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702494f0c610ed1b719265",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577dc613a256680f5166e33",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8b7c42c13221eb29f6bfe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597b84456a21080a2739ea7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65952df656a21080a2699e93",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65976c6056a21080a27133c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65819cdc5139e2e90e94901e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571c7a71987e25e2586b5b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c7355984959b734adbcc3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b217c6e702d09dcad4567",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567ecd7b371188f1412722e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e87338c305791476311bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658172355139e2e90e94174a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576fc053a256680f5133dec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694ed2b371188f141cb8d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c2744984959b734aa8998",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593b2e00771f87efefc1cdc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656182c0b371188f14ff9d53",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659011935139e2e90ec45cc0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65960cf156a21080a26a9be2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683a6cb371188f141667cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d81156e702d09dcb4e7b8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b09c1984959b734a5eb42",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f3d25139e2e90ea06ca8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65643510b371188f14055389",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ffd465139e2e90e8d7c56",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655aca4e984959b734a41816",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a727b371188f1420da58",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e1ab06a37ec2020556c92",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658960b35139e2e90eaf4c09",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576e22f3a256680f512e0f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d2a275139e2e90ebc619f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657440093a256680f50c02f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e199e6a37ec202055666e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657983563a256680f5250e65",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bf84d6e702d09dcae5794",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65598baf5c50a1da629f6fa2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598fc3d56a21080a2767d14",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657acbbacab7244e7d6aaede",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ee1178c30579147678173",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670abdb371188f140fa58d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a6bc15139e2e90eb2098b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f0145139e2e90e9d46a5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec72f07454fe5afc48139",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e921c5139e2e90ec1c32e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d32e55139e2e90ebcd4e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65781b893a256680f51a0cf0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a7461438d54fed6ef5aa9d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d63d3a256680f515f825",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698f13b371188f141f56af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d587b6a37ec202053383c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596755256a21080a26e81cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559cbae5c50a1da62a04136",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a92775139e2e90eb38f49",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8a428c30579147633fb3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f25eb371188f1412d188",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a7c555139e2e90eb268e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658817045139e2e90eaa138c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658904095139e2e90eac582e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e92038c3057914763c229",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65801ad85139e2e90e8eb6d5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657814d73a256680f5196cc8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fa2c728fe21a8cb0c9796",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65767cb03a256680f50f875b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581565d5139e2e90e930199",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597d72e56a21080a274634e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65585d325c50a1da629d03bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a7a494678d000ab21a0daf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65951c5f56a21080a268e3fd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c9ddb6e702d09dcb059f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556452054091050341b2aa6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656716aab371188f14100de8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670c7ab371188f140fbf08",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595258256a21080a2695276",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d374e6e702d09dcb1ba9e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65719ee51987e25e25860934",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cf6625139e2e90ebb272f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6599176056a21080a27729dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ebacecab7244e7d75837a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655747c2677fedf2af3dd966",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e9c228c3057914764780b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65719fdc1987e25e25860f94",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ac0605c50a1da62a2e81d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596774e56a21080a26ea723",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a25544572f93ea4c72e62d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b5944984959b734a87e53",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694fabb371188f141cc49a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65682d23b371188f1415c2ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ebde1cab7244e7d758a51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657818b53a256680f519c315",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d6369984959b734afda88",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6599620b56a21080a277de0b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ea7258c3057914764ff3e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577caf73a256680f51548da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65994aae56a21080a277b0db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562b540b371188f14027618",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65826bd55139e2e90e96b409",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561a01eb371188f14003dd8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658405e85139e2e90e9eae3c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656054443b3a73509b0baaff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65824d1c5139e2e90e95552f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9429673edc5b574c4c1d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65816c505139e2e90e93f8e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561627f3b3a73509b0fca75",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554c8b4d9b030bfa4607494",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65605a4c3b3a73509b0bf8fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597618056a21080a270ada7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ab24f5139e2e90eb435af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655cb2c5984959b734aeb7d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581f8665139e2e90e94e05b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65641da6b371188f1405231d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658543d45139e2e90ea3b831",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ffb5a5139e2e90e8d59a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c20d26e702d09dcaefd59",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65602dd33b3a73509b0a67cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ac346cab7244e7d6a14d6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a340d8572f93ea4c73f603",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c3883cab7244e7d713c01",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1e9ac572f93ea4c706ee3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657186d11987e25e2584b88a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657141c7ea266f4fe6abfc82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e4d5da54ffb895530c933",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657662713a256680f50e53c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65771e8f3a256680f5139758",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65549250d9b030bfa45f6ace",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597658556a21080a270e3ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bd2ae6e702d09dcadb9aa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eff55d7c5b7ad6c752c03",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560535c3b3a73509b0b9c52",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573cff33a256680f50a91be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a128756a21080a2782d9d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566ae11b371188f140a5dc9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fecd7d4c5dae496725aef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570448ce46926eabf19df7e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e95ce8c30579147640d86",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703ceff0c610ed1b736574",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a259b3572f93ea4c72fa39",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db29aa3ebbd69b0c80eca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65617d44b371188f14ff7e60",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961c3456a21080a26b572b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d4f5a6e702d09dcb3490b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566e7aab371188f140d3ca1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65791e4d3a256680f51e602d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9ae35139e2e90eb628fe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a03cb371188f14207226",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659765fd56a21080a270e89d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596733c56a21080a26e5ea7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8cf562c13221eb29ff773",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659693bb56a21080a26fa502",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65814b195139e2e90e926234",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656949c2b371188f141c6cae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656aa06b673edc5b574c968b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65729e5a3a256680f50780f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65838abb5139e2e90e9a1047",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65581927677fedf2af3f2025",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572cfba3a256680f508b6bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e76218c30579147627633",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657b1264cab7244e7d6baffb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a145756a21080a2782f51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b481f984959b734a842c0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e5890a54ffb8955314a5a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6599693c56a21080a277e6a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bdbd3a256680f51138a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c0e1e984959b734a99f51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583b9a25139e2e90e9bcbec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65696339b371188f141dcbfe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f1d8b371188f1412c6c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593b4fb0771f87efefc37e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561aecbb371188f1400ae8c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65615d453b3a73509b0fa1d6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a970c5139e2e90eb3c19f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bbf8256a21080a27e010a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6589ae355139e2e90eaf9df4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659424d10771f87efeffd386",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f6e35139e2e90e9db63f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0af4528fe21a8cb10813c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e2f375139e2e90ebecf1d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3ad1f572f93ea4c75cb42",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656003aed7c5b7ad6c79320d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a22108572f93ea4c71ebb6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657be526cab7244e7d6e2a94",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f8316d7c5b7ad6c787e19",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659c7d869705a8d4ee1e8dee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65643083b371188f14054975",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961e4c56a21080a26b73f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656024013b3a73509b0a0d37",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a8ed8673edc5b574c2dcc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596144c56a21080a26af547",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a49472572f93ea4c775dd8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa04dd0fe49b1a4579ff3c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659530d956a21080a269ac37",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698d0ab371188f141f3ab9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659619c656a21080a26b3973",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65672bd4b371188f1410a315",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65726e4a1987e25e2587716d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569c4c3b371188f14218bd7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a20c82572f93ea4c7163c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bc2b056a21080a27e3360",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658be8725139e2e90eb82c0b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3db4e572f93ea4c76510b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d74815139e2e90ebde6cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65675ad8b371188f14116465",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ef6a3d7c5b7ad6c74d09f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559aa785c50a1da629fc912",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a7a248678d000ab219f492",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c7b65984959b734adfd9a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655584e3d9b030bfa4620a4b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b22fb6e702d09dcad4779",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65699e10b371188f1420551f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584e30c5139e2e90e9fe9ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658109385139e2e90e9091f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566fd99b371188f140ed44b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b21b48bbde1921677d973a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9e3bf0fe49b1a4578c3df",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655bfc8d984959b734a94fd1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658389c45139e2e90e9a0d79",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658131be5139e2e90e91962b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65701a6af0c610ed1b70fcb8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3636a572f93ea4c7477f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bd1885139e2e90eb7578c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655569e1d9b030bfa46182f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bfee3a256680f51155a8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e4a595139e2e90ebfb6c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d2b846e702d09dcb104f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65752a893a256680f50cb319",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d9d4a8c3057914760ec94",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577dee93a256680f5169a90",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0981728fe21a8cb0f1cd0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65615ed73b3a73509b0fac38",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d3b2b6e702d09dcb20314",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e80ad8c3057914762c5c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658276995139e2e90e96e968",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712d81ea266f4fe6aadaa1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f3715139e2e90e9d7a71",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e47fc5139e2e90ebfa4bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65544bbd3de2a96680b1a923",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0ba8528fe21a8cb11032e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65673be7b371188f1410eac8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f2a2b371188f140ddb00",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655abaa65c50a1da62a2b0a5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bca605139e2e90eb71d17",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bdf49cab7244e7d6e1fb2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65728b453a256680f506e2e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aef02cab7244e7d6b518b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570342cf0c610ed1b72afd6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d4f0c6e702d09dcb3444b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576841e3a256680f50fdfae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c2e526e702d09dcaf398b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65572f45677fedf2af3d6af9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f1d9ed7c5b7ad6c76f365",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6590ff815139e2e90ec4dedd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658000425139e2e90e8da12d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d82f6a3ebbd69b0c6a7ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580073d5139e2e90e8e051d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bcffb9705a8d4ee1dbdc0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d94486e702d09dcb60766",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588e5845139e2e90eab0788",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ecde4d7c5b7ad6c737a2a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c9f13a256680f5087440",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ad7e1984959b734a4b737",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656af6ce6e702d09dcacdfd7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ffc635139e2e90e8d6f1c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ce0fc5139e2e90eba610c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65642afab371188f14053d4e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b976f5139e2e90eb6038a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d50366e702d09dcb35707",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582742a5139e2e90e96df45",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579c1de3a256680f525c9ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659df9f76a37ec202053f739",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657831013a256680f51bcc0b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65816ad05139e2e90e93f375",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658be2605139e2e90eb802eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582e6945139e2e90e99c1dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576e24a3a256680f512e14f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d511b5139e2e90ebdad52",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655a1c825c50a1da62a1e3b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597ab9156a21080a273204b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d86b2a3ebbd69b0c6d230",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c2b486e702d09dcaf260e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bc144cab7244e7d6d3739",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6575437e3a256680f50cef63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0ff9e28fe21a8cb13a54d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596804b56a21080a26f2f6f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65728b8c3a256680f506e867",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657133d9ea266f4fe6ab3e57",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656714deb371188f140ffd98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658388ee5139e2e90e9a0b09",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569d95db371188f1421ccb7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e82bdcab7244e7d75007a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596312056a21080a26c2696",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659370210771f87efef9f25f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594e58a0771f87efe0400a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657331ad3a256680f50a17d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554b45ed9b030bfa46021ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d3cfd6e702d09dcb2221d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656951b7b371188f141ce2dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670336b371188f140f3519",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d7f28984959b734b0f476",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566e7a9b371188f140d3c86",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f696cd7c5b7ad6c785ab1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d703c984959b734b057c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65966b3c56a21080a26de7a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576dee23a256680f512c4ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e43225139e2e90ebf7d05",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ecabf667cec84fcd4211b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657023e2f0c610ed1b7186e6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566db12b371188f140c9489",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567eca2b371188f14126f2c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658158875139e2e90e9328ef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6557574c677fedf2af3e0712",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a38fb371188f1420a9a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65780efc3a256680f518d9ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658538b15139e2e90ea3389a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a64f63a256680f526cfc4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571f0351987e25e25872cba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561b4e1b371188f1400d46d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566c21cb371188f140bfddd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0bf2328fe21a8cb1138df",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f1265139e2e90e9d55fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f9e7f28fe21a8cb0c579a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d7758984959b734b0a57c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573f0c53a256680f50b11df",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4b63ac452b4fba5c6a3b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f27f5139e2e90e9d6b35",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0ad2828fe21a8cb105fcb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698cefb371188f141f3803",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8b26c2c13221eb29f579e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bb4d3a256680f5111d15",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569992cb371188f142002f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fdc73cab7244e7d78af68",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ac91c984959b734a3fefb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579188a3a256680f51df2d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65600f453b3a73509b090921",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fa8cc28fe21a8cb0d0a76",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658243805139e2e90e9519dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a001b028fe21a8cb0e96f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65837a4b5139e2e90e9a01a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656edc0b8c30579147672cfe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a6b123a256680f52707ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f2ab80b62e45246526d3f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3abf9572f93ea4c75c496",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65afbda0fe16fbc4962b6f2a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65642931b371188f14053909",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f618128fe21a8cb0a7c68",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0e3dc28fe21a8cb124273",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657913d13a256680f51dadba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d39576e702d09dcb1df90",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e24d507454fe5afc26ae3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eca3a667cec84fcd41833",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dd24307454fe5afc156db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658293475139e2e90e9788ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657281733a256680f50646ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a7487a38d54fed6ef5d5a5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702879f0c610ed1b71ce23",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65824aaa5139e2e90e954077",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695050b371188f141ccf17",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65753dcd3a256680f50ce730",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65633eceb371188f1403f16d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595658356a21080a26a1510",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584ec485139e2e90ea0269f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65685419b371188f14186fde",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f1a48d7c5b7ad6c76cba1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ebac5a54ffb8955332dd7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65600ff73b3a73509b0910bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594dc7b0771f87efe03b192",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ee1fb5139e2e90ec29d05",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657afa85cab7244e7d6b69b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656020ff3b3a73509b09e8c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d4b906e702d09dcb3082a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65562cfb54091050341b03aa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a5e614115b1da58596bd81",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566b257b371188f140ac9d0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657abbf0cab7244e7d699b9e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65781a6b3a256680f519ed63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c97db984959b734ae7795",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a60431115b1da585983001",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cc6dd5139e2e90eb99134",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65571f2fc7b5a7b1f34f72e6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a928a673edc5b574c4303",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b5dc8484d8003638a54fba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961c4b56a21080a26b5884",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597707656a21080a271650b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b5e63f84d8003638a6124d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65772f0f3a256680f513b188",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f5e420b62e4524652b699",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561f4f0b371188f1401ae32",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695bc6b371188f141d6e93",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655492cad9b030bfa45f6e9f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65604b713b3a73509b0b2665",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65752ad43a256680f50cb3e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658fdcda5139e2e90ec42742",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657cf546cab7244e7d720d38",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657189ec1987e25e2584f8d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65600a173b3a73509b08c593",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65600d603b3a73509b08ef3e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659922e756a21080a27761f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659374b50771f87efefa4539",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683d7ab371188f14169a8e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1242e572f93ea4c6f95cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566e8b2b371188f140d4c6d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582b82e5139e2e90e993023",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560506d3b3a73509b0b6ee0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bda636e702d09dcadc8e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d30026e702d09dcb1460b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d0538ffc32fa81eb4578e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656164e33b3a73509b0fd96d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657578bc3a256680f50d47b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65814cb05139e2e90e92747f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d354b6a37ec202052e565",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702413f0c610ed1b718b25",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ee0048c3057914767734d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cf8edffc32fa81eb3b235",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596bf9956a21080a2700614",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961d2a56a21080a26b644a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597ae2c56a21080a2733c0b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a10661572f93ea4c6ec923",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c7503a256680f511cd78",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65767aa33a256680f50f7000",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65977b0f56a21080a271eb21",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586aa855139e2e90ea7f5c9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a88b82678d000ab21c02ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c3533a256680f50832a5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c1193a256680f5081820",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c2e096e702d09dcaf375c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f8e55139e2e90ea0b231",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655969d75c50a1da629ec66d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a70575139e2e90eb222d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593be380771f87efefca530",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c5083a256680f511ab53",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d3e266e702d09dcb23229",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568454cb371188f14173df0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ca81d9705a8d4ee1f0fe6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659eae50a54ffb8955331398",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656edaff8c30579147671a15",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a77395139e2e90eb2491a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ff04f28fe21a8cb0e6642",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a10a29572f93ea4c6ef104",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556163954091050341ac393",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65685149b371188f1418408a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582aa4d5139e2e90e989c72",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593da160771f87efefecf93",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656358b1b371188f140421e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65715120e1c4488437cfdeaf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659654af56a21080a26cc316",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a91e45139e2e90eb38af0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566ec13b371188f140d7fb2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573f1a83a256680f50b1624",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65853a0d5139e2e90ea34794",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65867a125139e2e90ea64ca1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cafb69705a8d4ee1f8054",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657adc4acab7244e7d6b2803",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a11331572f93ea4c6f4693",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d7e07984959b734b0e663",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582ac3a5139e2e90e98b20d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657be84dcab7244e7d6e38d4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558055d677fedf2af3ef230",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559d2f65c50a1da62a06917",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657826463a256680f51b087c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f61f928fe21a8cb0a8227",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d19376a37ec202052910e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657143a6ea266f4fe6ac163e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569d66cb371188f1421c404",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657cec17cab7244e7d720476",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e9c2807454fe5afc295b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581b15b5139e2e90e94ab86",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596056356a21080a26a6ca0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e0f1307454fe5afc23e32",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f636b371188f1413173c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576a20a3a256680f5107cca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657815bb3a256680f51980f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65781f4f3a256680f51a6aeb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684127b371188f1416e381",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f9cb728fe21a8cb0c4426",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65660233b371188f14083479",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659652df56a21080a26cb3e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582ae405139e2e90e98ce9b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a34655139e2e90eb01b86",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65615fbf3b3a73509b0fb3fb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596b3f556a21080a26fe6de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c12cbcab7244e7d70645f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655acaad984959b734a41c6d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fccc9cab7244e7d786882",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65755df53a256680f50d25d5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f3055139e2e90e9d73be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dfa2607454fe5afc2033c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c0ff4984959b734a9ae92",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658249f15139e2e90e953a30",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567ede1b371188f14128266",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b0da2652111443bcc79177",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eb3c807454fe5afc35a3b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572efa93a256680f509adab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ceacbffc32fa81eb31464",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a43b55139e2e90eb0e580",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f619128fe21a8cb0a7d50",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657674ee3a256680f50f22ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702f1ef0c610ed1b724cab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566b7f6b371188f140b7ce5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d42676e702d09dcb27823",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702997f0c610ed1b71deef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fd42b371188f1413a123",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65570663fb19a42233c49c8e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a93d05139e2e90eb39be4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d77d5984959b734b0aa8e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65675e7fb371188f141168ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659610e356a21080a26ac6f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fa77acab7244e7d76b283",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fb91d28fe21a8cb0dd0c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584063e5139e2e90e9eb1e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566b42fb371188f140b1576",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65609f713b3a73509b0e3a1f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659caf3d9705a8d4ee1f777e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655a3f525c50a1da62a21169",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d63c86a37ec2020534f68",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554af74d9b030bfa460050b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c3dcf6e702d09dcaf893b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a2446a572f93ea4c727cc7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fcae70b62e4524652f53a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656953b6b371188f141d04bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570059ef0c610ed1b706758",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657032cdf0c610ed1b729882",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583a8165139e2e90e9aead5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584e75e5139e2e90ea00038",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658120935139e2e90e9155ba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d64716e702d09dcb40520",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65800d915139e2e90e8e458f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ad1a76e702d09dcabf5cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656681e6b371188f14087f72",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a9a6c3a256680f5288c16",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ffc565139e2e90e8d6d88",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d4e456e702d09dcb338b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656703ddb371188f140f3ff0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ab42f70fe49b1a457f8a0e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594d2ff0771f87efe034bc6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65782eb53a256680f51bb4e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fc7b8cab7244e7d7845ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65653c69b371188f14065fbb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65782d523a256680f51ba1d0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db052a3ebbd69b0c7f0cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658015ef5139e2e90e8e93f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6587c1fa5139e2e90ea9b9ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ad16c50fe49b1a458508d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3ced1572f93ea4c763ce5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a9aa55139e2e90eb3ddf6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db4dfa3ebbd69b0c83068",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658285ab5139e2e90e974073",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a33028fe21a8cb0f9d47",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d4e2d6e702d09dcb33749",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588f4685139e2e90eabb471",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65692966b371188f141addc5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d810e984959b734b10f43",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579b52f3a256680f525aafc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fb241cab7244e7d7732e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577e0183a256680f516add5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655337d63de2a96680b02d88",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582adcd5139e2e90e98c5d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c6bf3984959b734ad6a6a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cbbf89705a8d4ee203f92",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558b1185c50a1da629e1a96",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584fc695139e2e90ea0ebe4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f8f9b371188f14134b9f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d5de3a256680f515f2b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659371a30771f87efefa0a82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a8d9e56a21080a278c060",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65710ac9e46926eabf1b475a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657500b73a256680f50c734f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576e4f63a256680f512f277",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656055b33b3a73509b0bb86f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655efe54d7c5b7ad6c7521f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f378b371188f140debbd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a5ddb0115b1da585967b97",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ba19e56a21080a27bea3e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bcabc9705a8d4ee1d9d52",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db3c3a3ebbd69b0c82215",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583df175139e2e90e9c9021",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e098f6a37ec202054a16a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573eab23a256680f50af855",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a36e9673edc5b574bcd72",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65791b603a256680f51e2b26",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694cb1b371188f141c9a63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596114856a21080a26acd01",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a78f90678d000ab218b4bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8e3a22c13221eb2a13614",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aae023a256680f5292ea5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e77efcab7244e7d74e8f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eb6b98c30579147655190",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65619250b371188f14ffe857",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6589bab75139e2e90eafa1b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a13e00572f93ea4c6fd8d4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd1960b62e4524653250d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c47d3cab7244e7d715f0b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bae1e56a21080a27cc52b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717785746d4d9eefbd59e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bdc26cab7244e7d6e12bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583dffb5139e2e90e9c9c01",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e7aa6a54ffb895532504d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f5817a54ffb8955343af0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659baf8e56a21080a27cdcc5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658014195139e2e90e8e8554",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d28c25139e2e90ebc52f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bd7b05139e2e90eb7962a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571756e746d4d9eefbd43b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65643b3db371188f14056214",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596ab9a56a21080a26fd5ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658be3945139e2e90eb80b20",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f7145139e2e90e9dbb08",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558bea85c50a1da629e3c17",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680afdb371188f1414936a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bc20dcab7244e7d6d3ddc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65827e5d5139e2e90e972c08",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d703b984959b734b057ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583b3355139e2e90e9b8cb7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65686732b371188f14193b0a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657eb848cab7244e7d757ca2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569acd9b371188f1421197c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a51935139e2e90eb1a0c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65682e43b371188f1415cc93",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af2adefe16fbc496246d69",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657547f93a256680f50cf743",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961b2356a21080a26b48cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c684c984959b734ad2eb4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657662263a256680f50e522f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569845fb371188f141ec2af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65825a1e5139e2e90e95f91c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65826f585139e2e90e96ca0e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595652556a21080a26a149f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e0b796a37ec202054b607",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c4700984959b734ab6762",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0f86b28fe21a8cb134863",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65728b603a256680f506e4d6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680b08b371188f1414944b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65575f01677fedf2af3e1a86",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e20126a37ec2020558ee9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795c9b3a256680f52225f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658120925139e2e90e91559b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657810963a256680f5190258",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e7859cab7244e7d74ea16",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b170a984959b734a697db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d37306e702d09dcb1b83c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a488f6572f93ea4c76ee9d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a60fb3a256680f5269203",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596a24356a21080a26fc1b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572aae93a256680f507b82f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e970e8c3057914764285b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fae8228fe21a8cb0d51b4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db519a3ebbd69b0c83384",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703be3f0c610ed1b735572",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b6b4d56a21080a27a974c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c5f8d984959b734ac2e57",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a05bb371188f142074ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a26725572f93ea4c731844",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b506c56a21080a2792e05",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657866c03a256680f51c91a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656985b1b371188f141ecdcc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d84276e702d09dcb51779",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65729db93a256680f5077e13",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cd7135139e2e90eb9fa63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a80f25139e2e90eb2a1f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b67fc56a21080a27a66a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572e6e73a256680f5098abf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a38909572f93ea4c752d8d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f4a84a54ffb895533b8af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c1d93cab7244e7d70d86d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659521cf56a21080a269224a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694207b371188f141bd9bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572cddd3a256680f508a220",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712b4be46926eabf1c0fa3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e3d275139e2e90ebf4e99",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65767be33a256680f50f7df0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d3fc3cab7244e7d731fc5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566e7acb371188f140d3cd6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572df4f3a256680f5095508",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577ba063a256680f5143931",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ee4758c3057914767b655",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3ba72572f93ea4c760c7a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65815b3b5139e2e90e934e3c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656702b1b371188f140f2b14",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d88796e702d09dcb55fdc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655756a3677fedf2af3e05d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e2c0a07454fe5afc272d5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fb39c28fe21a8cb0d9993",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657322523a256680f50a044b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566a975b371188f140a018f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a38f58572f93ea4c75439f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a618d3a256680f5269be0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658439d35139e2e90e9f610b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656058203b3a73509b0bd07c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585471b5139e2e90ea3dd23",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558740e5c50a1da629d583c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c178acab7244e7d709a29",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bd7805139e2e90eb79498",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65618556b371188f14ffaba0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b560256a21080a2796899",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65810fc05139e2e90e90e5b8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596335156a21080a26c301e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bc1f1cab7244e7d6d3d0b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af60d3fe16fbc496268b91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ede5a8c305791476756fb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65577b72677fedf2af3e72bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659385980771f87efefb222e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a5e5f3a256680f5267296",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1090e572f93ea4c6ee2ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581459e5139e2e90e921e36",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ffa47d7c5b7ad6c78dd27",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f766b371188f14132be4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d63886e702d09dcb3ffaf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670896b371188f140f8c89",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a9df23a256680f5289df6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580ec3c5139e2e90e8fa575",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d010dffc32fa81eb41f40",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65669cf0b371188f14093f76",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597ba5256a21080a273b127",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ea4048c3057914764da87",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717a7b746d4d9eefbd83f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c1c43a256680f511725f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d7f7d984959b734b0fa3f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d6a6f6e702d09dcb432c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1fed9572f93ea4c70ea5a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565b832b371188f1407a7b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6574281a3a256680f50bb92a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6587e32d5139e2e90ea9e150",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680b46b371188f14149815",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a722d3a256680f5275644",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb04e56a21080a27cea24",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65587ee35c50a1da629d8e47",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65afa21dfe16fbc4962ab0ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656937f1b371188f141b4099",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65746d2a3a256680f50c3889",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e52d5a54ffb8955310e2a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572959c3a256680f507497f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657158fce1c4488437d00502",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596950756a21080a26faa5c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554725f1b75146e90df593c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657418f23a256680f50b84bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65900ac65139e2e90ec453cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571709a746d4d9eefbd1614",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680191b371188f1413e39c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d4ce76a37ec2020531882",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dcbe007454fe5afc10e9b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6557481c677fedf2af3ddab0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656053f53b3a73509b0ba960",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d5b9f6a37ec202053409b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65643e1bb371188f14056776",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594d6510771f87efe0371b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fd871cab7244e7d78a19c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683fc7b371188f1416c4bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656edbc08c3057914767274a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d92b46e702d09dcb5f847",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659aa05756a21080a278d08a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596310a56a21080a26c2609",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ecf468c305791476613ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586970b5139e2e90ea6d9da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65616adc3b3a73509b1003b1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3e6b5572f93ea4c766728",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65826e905139e2e90e96c776",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e89178c30579147632b8e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566939ab371188f1408bce1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bf73fcab7244e7d6e8374",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657686523a256680f50ff560",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584ef4c5139e2e90ea03b52",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65682455b371188f14157bdf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659413ba0771f87efeffafd5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d387b6e702d09dcb1cd39",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588f23f5139e2e90eab9d95",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65559a22fbfbe9529ceae76a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4c8cec452b4fba5c6f05a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6578fdea3a256680f51d12b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659759e956a21080a27065ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ca19f984959b734ae8f97",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e7bbb8c305791476292e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65acb2bb0fe49b1a4583ac6d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c34906e702d09dcaf5e84",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65829f1a5139e2e90e981dfd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a11114572f93ea4c6f3332",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e15656a37ec20205540a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da14ea3ebbd69b0c772b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c3613a256680f514b9f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658592405139e2e90ea53fd8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bf02b5139e2e90eb8828b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d90746e702d09dcb5dcc7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c6993a256680f514e973",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d40a95139e2e90ebd6626",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65549696d9b030bfa45f95b5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657027c6f0c610ed1b71c203",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e966a8c30579147641aff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559bc9a5c50a1da62a003c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656332bfb371188f1403d75b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657807d13a256680f51853f4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584ea145139e2e90ea01505",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ab4be5c50a1da62a27829",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576cd3a3a256680f5121165",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b8c6456a21080a27b794b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582c50e5139e2e90e99705c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659623da56a21080a26bb22a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a398e6572f93ea4c757270",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d28786e702d09dcb0de7a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d710e984959b734b062d0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65704516e46926eabf19e4d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65618775b371188f14ffb891",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657178cb746d4d9eefbd6ad6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e62c1a54ffb895531c8e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db33ba3ebbd69b0c81849",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e73d85139e2e90ec093eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d9da4a3ebbd69b0c75be8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a29026572f93ea4c736169",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d2c7a6e702d09dcb111e0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655333423de2a96680b023c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65995f4d56a21080a277d8d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a27b6f572f93ea4c732823",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593d3d30771f87efefe58cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d76466e702d09dcb47af2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cb3e29705a8d4ee1fbafd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576be4a3a256680f5113eac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65797b123a256680f5249fe9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ce1455139e2e90eba626f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655987a55c50a1da629f62cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657283c03a256680f50673ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657667313a256680f50e7dbd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580f5e65139e2e90e8fca54",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656760cbb371188f14116e28",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d4aa66e702d09dcb2f95b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555d5d6540910503419aa4d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a219cc572f93ea4c71d431",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fff665139e2e90e8d95de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712df0ea266f4fe6aae22c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656da1908c30579147611438",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598c84456a21080a2758f99",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559c4775c50a1da62a027ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cbd869705a8d4ee205787",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65545e623de2a96680b1ea07",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556211b54091050341ae2f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571886b1987e25e2584d7ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598cac856a21080a2759fda",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65658b10b371188f14072d44",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fab2e28fe21a8cb0d2bcb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65812edc5139e2e90e918218",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af2bfdfe16fbc4962483ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562ae70b371188f14025470",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577da163a256680f51647e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657045fae46926eabf19e99a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657004c8f0c610ed1b706402",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586f0835139e2e90ea9084b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e160c07454fe5afc25520",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c10b5984959b734a9b4fd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a28a11572f93ea4c733ee4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656da0da8c30579147610d98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f0862d7c5b7ad6c75b172",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0f6f628fe21a8cb133366",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656833e8b371188f14160563",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d2c465139e2e90ebc7af2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586510b5139e2e90ea5e8e4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657548fb3a256680f50cf8be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c75cfcab7244e7d71ba98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656be4e76e702d09dcadf3b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c40d1cab7244e7d71493a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b7896984959b734a8f08b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fc1e428fe21a8cb0e087d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583c4895139e2e90e9bf722",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c74ff984959b734adccea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db110a3ebbd69b0c7f9ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d8b656e702d09dcb5878a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556d61954091050341bd9e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65547fd9d9b030bfa45eba79",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8ef1c1af4cdbbce81a23c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571813d746d4d9eefbde9a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566897bb371188f14088bdb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e9fbea54ffb895532fafc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562ef5fb371188f1403423c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65602c693b3a73509b0a5eb8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65781e4d3a256680f51a5318",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eb3b507454fe5afc358fa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65950d2a56a21080a2684889",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9b225139e2e90eb62b59",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656aaf0e7402b9bc2abeb545",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580262d5139e2e90e8ee14f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65685e18b371188f1418f70f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d6663a256680f515fb30",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569394eb371188f141b4daf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565a1c5b371188f14075f06",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577f1343a256680f5175811",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657f2169cab7244e7d760772",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bffcd6e702d09dcae8d59",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fcdfd28fe21a8cb0e2f6f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a7b9f5139e2e90eb2646c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aafc1cab7244e7d6899e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576e5e13a256680f512f8a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eb5a207454fe5afc37c69",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff041d4c5dae496728b77",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65699542b371188f141fbf66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588f47b5139e2e90eabb4d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572beec3a256680f5080865",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576dbbc3a256680f512ab31",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65699cb7b371188f14203bda",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658537385139e2e90ea32e47",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a69c7738d54fed6ef40783",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795d613a256680f522373a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bfd13a256680f51153e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cf5e55139e2e90ebb20b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581845f5139e2e90e944ffc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562bd84b371188f14029c01",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3362c572f93ea4c73d564",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566aad8b371188f140a1474",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657182b6746d4d9eefbe068a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657682bc3a256680f50fcf6f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e07796a37ec20205484e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670947b371188f140f95e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568001bb371188f1413d23a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b977a5139e2e90eb60434",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c35ff984959b734ab04b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1f96e572f93ea4c70c7b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ebd4c07454fe5afc40235",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567ecc6b371188f14127117",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9c655139e2e90eb63976",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656aa2b4673edc5b574ca6a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ebf798c305791476576a8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6564ad4db371188f14062e4d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0f9ee28fe21a8cb135b5c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579634a3a256680f522cd96",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a211cf572f93ea4c719497",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a346ab572f93ea4c7410f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8e4f8c305791476386e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562bb56b371188f1402927a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f654d28fe21a8cb0ab138",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65644147b371188f1405713a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d6687984959b734affa13",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65719d9c1987e25e258601db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657477d83a256680f50c4a7a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656edf758c305791476769dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d36505139e2e90ebcfa3a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703b14f0c610ed1b734781",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e82b08c3057914762d8c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65583c2d677fedf2af3fc232",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a78e3d678d000ab218a2c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d47b3a256680f515df20",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656167483b3a73509b0fe8a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c68ee984959b734ad351b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65718d971987e25e25853e3a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a3ba556a21080a27868da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656049893b3a73509b0b1336",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aac023a256680f52911df",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695e3ab371188f141d8b05",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bc6f99705a8d4ee1d7933",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b1a02984959b734a6d262",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593a49b0771f87efefbc766",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b53fb56a21080a2794fdb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f0561d7c5b7ad6c758051",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65655e42b371188f1406a648",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566db56b371188f140c96c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657314e03a256680f509ea9c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db497a3ebbd69b0c82c7c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f4827d7c5b7ad6c77f9b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f262f0b62e45246525d08",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580189a5139e2e90e8ea724",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583df7d5139e2e90e9c95f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ff0cccab7244e7d7915bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d6be2984959b734b027af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a9d555139e2e90eb3f5ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a590b371188f1420cb04",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f7de428fe21a8cb0b595d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583ee1d5139e2e90e9d29b4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa33330fe49b1a457b8501",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684af9b371188f1417b577",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572802f3a256680f5062ce1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594e58f0771f87efe0400c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567de06b371188f1411c9dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ea9b8cab7244e7d755b5b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a77e256a21080a278af10",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65782f883a256680f51bbe84",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565950ab371188f14073d59",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe3dc0b62e4524654332d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656857cdb371188f1418acbb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555aaedfbfbe9529ceb4440",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65681f72b371188f14155aeb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bbe5d56a21080a27df1d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a63be338d54fed6ef0c498",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576ce613a256680f5121cd2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d735bcab7244e7d73e282",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65614c703b3a73509b0f38ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f17ab371188f1412c133",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d1aa46a37ec2020529b6a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576ec1c3a256680f5130fd1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598107d56a21080a274ceaa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577b4303a256680f51404cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f983b371188f1413575a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e7c388c30579147629769",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d6820984959b734b00967",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657188151987e25e2584d15f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a00cb728fe21a8cb0eb175",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65709c0de46926eabf1b2a2a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597824f56a21080a2726296",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573d9ff3a256680f50ab804",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559c9fb5c50a1da62a03736",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3e474572f93ea4c7662c9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572874c3a256680f506ae6f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d35436e702d09dcb196c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d9e63a3ebbd69b0c75f09",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec2ef07454fe5afc44f42",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e91fe5139e2e90ec1c1d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65607c793b3a73509b0dbc55",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569879db371188f141ee7b8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bd8c55139e2e90eb7a5e0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e89e78c30579147633b0f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eccbcd7c5b7ad6c736c08",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657289063a256680f506c7cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65571022fb19a42233c4d0c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d0651cab7244e7d7230ba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658247db5139e2e90e952c2e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695b89b371188f141d6cc8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656da66e8c30579147613e4d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e2f9e07454fe5afc274e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659775d856a21080a271aff3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb1f956a21080a27d0f30",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af78aefe16fbc496282fbf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a5ecf3115b1da58596f3f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588f5325139e2e90eabbdb7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657677913a256680f50f46a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657191291987e25e258568fe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f992b371188f1413589e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684300b371188f14170753",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c1c40984959b734aa1d6b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65951c5256a21080a268e35b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597c66156a21080a2741351",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583eeec5139e2e90e9d3596",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af6334fe16fbc49626a5dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569e90cb371188f1421faf2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6587d5f55139e2e90ea9cfca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585364f5139e2e90ea328e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572a0093a256680f50786a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e545ea54ffb8955311a11",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fbf0ecab7244e7d77f0d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65570f90fb19a42233c4cd53",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d74b9984959b734b08e0f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b92c45139e2e90eb5c395",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65556badd9b030bfa461896f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65669573b371188f1408cc5e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f36a6d7c5b7ad6c77acca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568427cb371188f1416fcbd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554e54ed9b030bfa460ff4d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658553a25139e2e90ea46cf7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556d3f954091050341bcda8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1f3c8572f93ea4c70a980",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d82db6e702d09dcb5046a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fcc5e0b62e4524652fab2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f2f990b62e45246527957",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ddc158c3057914761ec96",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b451d984959b734a83853",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a78d3f678d000ab218941f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d3bee6e702d09dcb21136",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ecca4d7c5b7ad6c736aaf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577b4f43a256680f51409f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657421ef3a256680f50ba376",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65825fc05139e2e90e9629a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6587c9c35139e2e90ea9be7e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ab43b80fe49b1a457f8e7a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65756c703a256680f50d30c8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658533045139e2e90ea313de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c6dd2984959b734ad848a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4f20ee32fc2fd7e776cc0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e462c5139e2e90ebf9671",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65951d7a56a21080a268ef84",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656edb858c30579147672562",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b07846e702d09dcad21cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65580bb8677fedf2af3efaa6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e908fcab7244e7d752949",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b22b2984959b734a72e10",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65714869ea266f4fe6ac49ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d3bcb6e702d09dcb20e66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65780a243a256680f518803d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ffc3f5139e2e90e8d6c30",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a20523572f93ea4c711e25",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bcbaacab7244e7d6d9d54",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4f7e0d9fcd3564fb17394",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e6ee7cab7244e7d74cddf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed90e8c3057914766fc16",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572eccc3a256680f509a39e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560538c3b3a73509b0ba0b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65827f4d5139e2e90e972ce6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a7b4b371188f1420e1ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656018ee3b3a73509b097787",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576dedb3a256680f512c4da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65658cbab371188f14072f88",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65742e7e3a256680f50bce28",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65556e1dd9b030bfa461988f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a4c7856a21080a2787d30",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d589ecab7244e7d7385eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65546f94cdf231dfef89e9b1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566a966b371188f140a005d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572b28a3a256680f507cfe8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65709a09e46926eabf1b25cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659022355139e2e90ec4694d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554ec0bd9b030bfa4611663",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569984ab371188f141ff2a5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d95388c305791476084b1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593a66e0771f87efefbd0dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65813b405139e2e90e91d455",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4a508572f93ea4c782495",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ced4d5139e2e90ebadacd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593c9c10771f87efefd782f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d2a286e702d09dcb0f3d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554cc3ed9b030bfa460865e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658523da5139e2e90ea25fa2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec36507454fe5afc453bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fe56b371188f1413b300",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65781a3d3a256680f519e930",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a7b279678d000ab21a8744",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562b708b371188f14027f50",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571796d746d4d9eefbd74fd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566e3f9b371188f140d0eb8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6590b01a5139e2e90ec49439",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f4da9a54ffb895533d842",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f2a0d0b62e45246526905",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559caf65c50a1da62a03b22",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657678113a256680f50f4f0d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a8ce95139e2e90eb358e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dc7428c3057914761af42",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577cb703a256680f51551ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597d88556a21080a27467b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656709f8b371188f140f9de4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583bfb85139e2e90e9be7b1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597c7d956a21080a2741d79",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a36029572f93ea4c7470cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65541eca3de2a96680b0a45f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c9573a256680f50870c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65962e6156a21080a26c0ded",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d4fa65139e2e90ebdaabe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703202f0c610ed1b7287b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65758e063a256680f50d7307",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a12f28fe21a8cb0f7bef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702ef0f0c610ed1b72493a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e09f56a37ec202054a621",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e6c208c305791476259d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65acc3410fe49b1a45841dad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c24af984959b734aa6e6b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65617e5eb371188f14ff83ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65975ad556a21080a2706cfb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656987f8b371188f141eecac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684731b371188f14176944",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65571e37c7b5a7b1f34f693f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c1fd16e702d09dcaef723",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702ee9f0c610ed1b7248e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571361bea266f4fe6ab5ef1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594fffc56a21080a267e17d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a21f0d572f93ea4c71e260",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b71726e702d09dcada4f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573ec753a256680f50afea4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c53266e702d09dcafcd6f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702101f0c610ed1b716226",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a22bb7572f93ea4c720a58",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dae16a3ebbd69b0c7d6f4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e359f5139e2e90ebf07bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a5e8b371188f1420cd64",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d2bf96e702d09dcb10a5e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584064f5139e2e90e9eb20f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d99438c3057914760bde7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ea2188c3057914764c75f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65855e345139e2e90ea4b397",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec9ea667cec84fcd413e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65781ce13a256680f51a2bed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d3ea16e702d09dcb2390b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680ffdb371188f1414d5e0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577689a3a256680f513cb7f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65636c82b371188f14044078",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a80ca56a21080a278b768",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658160a85139e2e90e939133",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f3a1bd7c5b7ad6c77ba49",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fb4a1cab7244e7d7757d5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b87615139e2e90eb5330a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d97368c3057914760a142",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f0f9e0b62e452465225be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556da9354091050341c0234",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d397ccab7244e7d730644",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a66e3138d54fed6ef3630c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597a92d56a21080a2730b42",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d40326e702d09dcb2570c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582566e5139e2e90e95d345",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c46d1984959b734ab659f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3e8e9572f93ea4c766acc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c58c3a256680f514d772",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bb749cab7244e7d6cbabd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658999c45139e2e90eaf977e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d37bd6e702d09dcb1c193",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582f1015139e2e90e99d6a8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c0d53a256680f5081563",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572f91e3a256680f509c394",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a8b1156a21080a278be02",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566c6acb371188f140c2257",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a95533a256680f52875f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583e20e5139e2e90e9cb148",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a46b85139e2e90eb120ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65767c4f3a256680f50f8336",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657592913a256680f50d78f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655df56807454fe5afc1f410",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ace84984959b734a44683",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598f4a256a21080a2766044",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597755b56a21080a271aa11",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eb4b707454fe5afc36bad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65562d2c54091050341b0423",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f050cd7c5b7ad6c757acb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa79f30fe49b1a457e2369",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658108875139e2e90e908b99",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65713261ea266f4fe6ab270e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585471e5139e2e90ea3dd3a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c1b41984959b734aa126a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702d2af0c610ed1b7222be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cd0a65139e2e90eb9c60d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65582a24677fedf2af3f5fe0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c0f24984959b734a9a719",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65641500b371188f1405081b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cfeecffc32fa81eb3fd74",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658146605139e2e90e92275e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65581fb1677fedf2af3f37f4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ddae7cab7244e7d748154",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65711924e46926eabf1b65fe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656015a33b3a73509b0954c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c36776e702d09dcaf667e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6599338b56a21080a2778fe6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556bfcf54091050341b6488",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e87b45139e2e90ec14240",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65709db7e46926eabf1b2ccc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656734b6b371188f1410c586",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af6345fe16fbc49626a670",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565a6beb371188f14076e8c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597ab1056a21080a27319d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b629c56a21080a27a1626",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680da1b371188f1414ba9a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e2bd05139e2e90ebeb6a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d79986e702d09dcb494d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a20ebc572f93ea4c717923",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b1bb4984959b734a6e374",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582a83f5139e2e90e9882cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ec7ed8c3057914765aef3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561de27b371188f140164a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65700ee7f0c610ed1b709604",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65976d6a56a21080a2713fe1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561ad20b371188f1400a5e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657eb680cab7244e7d7577ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593e4e20771f87efeff43ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f9e25139e2e90e9dfb12",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567229bb371188f14106eb8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d0aa0ffc32fa81eb4aa75",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e3b1d6a37ec202055ee37",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bcdd8cab7244e7d6db336",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d9a588c3057914760c659",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f02aad7c5b7ad6c7557fd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656696f6b371188f1408d9f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e362e5139e2e90ebf1019",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572b88c3a256680f507e645",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583a6a25139e2e90e9adaaf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560253a3b3a73509b0a1a51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655480cbd9b030bfa45ec227",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6574175c3a256680f50b7fd8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e8c07a54ffb895532b0b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e7bc68c30579147629361",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65699908b371188f141fff4d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65978b4d56a21080a2729451",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579699e3a256680f523524e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bdee95139e2e90eb7e97a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584ef9b5139e2e90ea03e90",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cfbe05139e2e90ebb4949",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e86285139e2e90ec1337a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d32786e702d09dcb16ecb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582ee7f5139e2e90e99d4cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657145a1ea266f4fe6ac2fb5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657824e33a256680f51aeaaa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658beb145139e2e90eb849f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b96385139e2e90eb5f2da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556d91954091050341bede1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65781bdc3a256680f51a1414",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555c460fbfbe9529cebbe8d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573e98a3a256680f50af3b4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6589372b5139e2e90eadd85e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65549d26d9b030bfa45fb61d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eb5d08c30579147654dbd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555d4ad540910503419a3dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658226b35139e2e90e94e884",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658103845139e2e90e90557b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e277f07454fe5afc26d82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658541ac5139e2e90ea39eb2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583e27a5139e2e90e9cb4de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657413c03a256680f50b7183",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65688da8b371188f1419e447",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a38c3a572f93ea4c7539e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655387153de2a96680b0716b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9a7f5139e2e90eb62536",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556181654091050341ac7a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65605f203b3a73509b0c6d48",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ceeeb5139e2e90ebae7f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a895532c13221eb29de63b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658946245139e2e90eae6c62",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658851dc5139e2e90eaa3e05",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da950a3ebbd69b0c7a888",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559f8c95c50a1da62a0c701",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f06bbd7c5b7ad6c7593df",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659664d556a21080a26d9196",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d9df1a3ebbd69b0c75d3c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566d92eb371188f140c8750",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65579e0d677fedf2af3ebe91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65782a873a256680f51b6b00",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a52565139e2e90eb1a6de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a12fc5572f93ea4c6fb9c3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571cd381987e25e2586cd19",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576dec53a256680f512c42d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f3d3dd7c5b7ad6c77cc67",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588f6705139e2e90eabcdfb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659666ff56a21080a26db152",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658525d15139e2e90ea27905",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b692656a21080a27a79ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bd9055139e2e90eb7a891",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a72843a256680f5275a7e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593bf8f0771f87efefcb6e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b74456aca77df7e7c197dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659faf7228fe21a8cb0d5b39",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656edab18c3057914767155b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582544c5139e2e90e95b4bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a6559a38d54fed6ef24e2e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657af4cdcab7244e7d6b6182",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698c2db371188f141f2ac1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c7dbc984959b734ae0e63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702afdf0c610ed1b71f5a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586f3485139e2e90ea90cd7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0f11428fe21a8cb12ee02",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581530f5139e2e90e92cfc6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e6f5b5139e2e90ec06bb6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656051b83b3a73509b0b7dcd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562ad75b371188f14024f80",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658296675139e2e90e97a50a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567496ab371188f141128a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c1a7b984959b734aa087e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6599289456a21080a27773fd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65855b0e5139e2e90ea4a058",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576ca873a256680f511f631",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565e470b371188f1407fd0a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d43746e702d09dcb28991",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f77ab371188f140e3d97",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c3f966e702d09dcaf9411",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559f9805c50a1da62a0c81e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576ba123a256680f5110f7b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655daf8fa3ebbd69b0c7e5f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a37c58572f93ea4c74d2e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65715c4fe1c4488437d01366",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655af5e6984959b734a581bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594f64f56a21080a267bbba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583bb1c5139e2e90e9bd24b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717ab6746d4d9eefbd87ef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ae5776e702d09dcac7dbb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65715753e1c4488437cffe90",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d89c56e702d09dcb572f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d99318c3057914760bd8b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566afa6b371188f140a8a14",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65814efa5139e2e90e92933b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569b97db371188f14215fbf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b536256a21080a27948ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65682207b371188f141568e6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b5b4256a21080a279adf2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658109105139e2e90e908fe8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f39ab371188f140defb9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657293403a256680f507319f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f583b371188f14130b81",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655cb78f984959b734aecc2e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559fefe5c50a1da62a0f3a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658531f65139e2e90ea30ce4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657181b6746d4d9eefbdf3b8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655886da5c50a1da629db860",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561389f3b3a73509b0f1426",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657914843a256680f51db90c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d35ed5139e2e90ebcf489",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a90cb673edc5b574c3805",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583fcbf5139e2e90e9e2f2b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659757bb56a21080a2705571",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597b53e56a21080a27386ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554b14fd9b030bfa4601068",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658154eb5139e2e90e92e9c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65992f9656a21080a27788dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ac5ac6e702d09dcabc052",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4ccbdc452b4fba5c7068e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597df7f56a21080a274778e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b94f05139e2e90eb5e432",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658952db5139e2e90eaf14b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65655aa9b371188f14069719",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fa0af28fe21a8cb0c75c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656feec9d4c5dae496727759",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566a3bcb371188f1409a1cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582cf075139e2e90e9994bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596604356a21080a26d5160",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b957556a21080a27b9ba8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b25f6984959b734a76e84",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b8b7956a21080a27b76c0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656efe830b62e45246520443",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0749928fe21a8cb0ed0db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555e55454091050341a1aaa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3361b572f93ea4c73d534",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657f9d73cab7244e7d7647a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c1d20984959b734aa2584",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65686180b371188f14190d87",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff694d4c5dae49672e2d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ace3756a21080a278ed30",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593be5e0771f87efefca74e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0c38728fe21a8cb116db7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e3a515139e2e90ebf3c2c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc9b50a869296a4ade6e0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566d8bfb371188f140c84e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684725b371188f14176813",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ccc2b5139e2e90eb9aaa9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568473cb371188f14176a88",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659df10a6a37ec202053a6f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65701f17f0c610ed1b714107",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566d5cab371188f140c7171",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a081cd28fe21a8cb0ed5f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558a7535c50a1da629e01a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bbfac56a21080a27e042b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d29565139e2e90ebc5a54",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566a8a9b371188f1409f4f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65572c86677fedf2af3d5d3f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bedae5139e2e90eb86408",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659518d656a21080a268c1d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c53fb984959b734abc0c3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577b9323a256680f5142eea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658be83e5139e2e90eb82a6d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596842656a21080a26f567f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65802ae15139e2e90e8eeae6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c092acab7244e7d6fef3e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fb972cab7244e7d779aa0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed0b58c30579147663055",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a1b1b56a21080a27838a8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b8de85139e2e90eb58b02",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65616f59b371188f14ff2831",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598bab956a21080a2754251",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656aa8217402b9bc2abe78ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a36144572f93ea4c7473f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f5470a54ffb8955341497",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f3e0fd7c5b7ad6c77d112",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a77615139e2e90eb249c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bdff0cab7244e7d6e20e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588e8065139e2e90eab27c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593673c9324369468815338",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65797c303a256680f524ac7f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65839f975139e2e90e9a82c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65582745677fedf2af3f53b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568543cb371188f1418724b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a4b8556a21080a2787c03",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581b00a5139e2e90e94aa10",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656701b5b371188f140f1a99",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e92968c3057914763cf9c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658c5bcd5139e2e90eb96285",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65865ba45139e2e90ea61102",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670a44b371188f140fa183",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65655260b371188f14068362",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583c96a5139e2e90e9c078e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670bfeb371188f140fb876",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656849d2b371188f141797a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ab70500fe49b1a45805cd0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b2418984959b734a753c9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658112ae5139e2e90e90fb61",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ff9dc5139e2e90e8d3f62",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9fc5d0fe49b1a4579ddb5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fa5bb371188f14136700",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658c2d285139e2e90eb92680",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596a59456a21080a26fc6ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e09986a37ec202054a1e4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f618e28fe21a8cb0a7d3d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c3e9e6e702d09dcaf8d09",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa2d430fe49b1a457b1c66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6578ed3e3a256680f51d04a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ece738c3057914766021f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b6f9b984959b734a8d1f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a23f1c572f93ea4c725f15",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fe4fb371188f1413b250",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1022228fe21a8cb13c27f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583fe625139e2e90e9e4cd1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656133d03b3a73509b0f0eee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657186991987e25e2584b45e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d8daaa3ebbd69b0c70d33",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bba5356a21080a27dae3b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572953c3a256680f5074582",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e7812cab7244e7d74e988",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e3e04a54ffb8955300b05",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e182307454fe5afc25ab5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65711649e46926eabf1b5b6d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a14d06572f93ea4c6ff4f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582b6755139e2e90e992547",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65800b6a5139e2e90e8e2bcf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65768b5f3a256680f5101f7c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569b6e1b371188f1421530e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65584a985c50a1da629c9e43",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566b2bdb371188f140ad49b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702c14f0c610ed1b720bd7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659677bd56a21080a26eae57",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565dc10b371188f1407ead2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eefba0b62e45246518e37",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65682823b371188f14159756",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554b2b2d9b030bfa4601a1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65951ef956a21080a268fd79",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658693015139e2e90ea6a1ba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6575889f3a256680f50d6bd2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585100a5139e2e90ea1a251",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ff0595139e2e90ec4410e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657abb78cab7244e7d6995b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8b39a2c13221eb29f5dd6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582a07e5139e2e90e982a1c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659503f856a21080a267f415",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9e6d60fe49b1a4578e58a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ae704984959b734a531fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e033b6a37ec2020544e7c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561b16fb371188f1400bd18",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d4e076e702d09dcb3358d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65766b733a256680f50ea33f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b8ed55139e2e90eb5921d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f07e7d7c5b7ad6c75a708",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d808f984959b734b1067e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d1b746a37ec2020529f6c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ed1a9cab7244e7d75989b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560af4e3b3a73509b0e9361",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658165ba5139e2e90e93c857",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a003cc28fe21a8cb0e9c77",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d2ccc6e702d09dcb115bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a8db35139e2e90eb364ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658542ab5139e2e90ea3ad85",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583a08e5139e2e90e9a9208",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f198ed7c5b7ad6c76c164",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d6d4b984959b734b0374c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658beabc5139e2e90eb84845",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d5a206a37ec2020533cd8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657025fff0c610ed1b71a8b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656987c8b371188f141ee9c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab6c4cab7244e7d693c2a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571972f1987e25e2585bf86",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554b925d9b030bfa46034d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658105285139e2e90e906c2c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c61bf984959b734ac8864",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe3380b62e45246542922",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6578305d3a256680f51bc628",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe3960b62e45246542e2f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65966c9256a21080a26dfb39",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657681d83a256680f50fc237",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658eeac75139e2e90ec2a58b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b40816e702d09dcad74e6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572d2b93a256680f508cf30",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dfb4307454fe5afc20775",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f6325139e2e90ea08a54",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c80b3a256680f511da49",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e5bfaa54ffb8955317621",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657694a13a256680f5104734",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571a1b01987e25e25861ca8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566fa54b371188f140e748f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559f8195c50a1da62a0c5b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e35cd5139e2e90ebf0ad2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9f4e30fe49b1a45798ebd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d0eef5139e2e90ebb8739",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657666043a256680f50e73d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586ec345139e2e90ea903b1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658180fc5139e2e90e94456a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569da46b371188f1421cfe8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ba12f56a21080a27be55f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b423d6e702d09dcad780a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558643f5c50a1da629d238f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e5118a54ffb895530fc9f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a2012a572f93ea4c70fb80",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d64cd6a37ec2020535586",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65828dbf5139e2e90e976682",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65696252b371188f141dbe0e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a7346f38d54fed6ef4b35a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694169b371188f141bcf44",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af3bf2fe16fbc496258dad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65618b1bb371188f14ffc2c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657be905cab7244e7d6e39dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596693156a21080a26dceb8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65708054e46926eabf1ad4e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c2389984959b734aa63f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a741d3a256680f5276f08",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c43c6984959b734ab50f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656690f8b371188f1408af57",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554d6a3d9b030bfa460c2fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658441265139e2e90e9f6f12",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65601b4c3b3a73509b0998a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e6a13cab7244e7d74c2f4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fdedbcab7244e7d78b860",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658528c45139e2e90ea29e98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0f4de28fe21a8cb131a7d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65786ebc3a256680f51cb3c8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bf9f26e702d09dcae6179",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bd4b3a256680f5113293",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e91108c3057914763aced",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559d0765c50a1da62a063b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596186156a21080a26b26e4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656960a9b371188f141da804",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658015455139e2e90e8e8d42",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657959493a256680f521fa64",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65672a2cb371188f14109d44",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a345b371188f1420a4f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ab6b240fe49b1a458041a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a2071d572f93ea4c713090",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566fdd7b371188f140ed754",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795e883a256680f5225720",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556416f54091050341b24ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658126b35139e2e90e916a60",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c306c6e702d09dcaf47bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572e3dd3a256680f50977a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65642602b371188f1405328e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657554933a256680f50d1633",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d2c645139e2e90ebc7c9e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed8c08c3057914766f764",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6587f4445139e2e90ea9f72c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c12eb984959b734a9c697",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db213a3ebbd69b0c80808",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db790a3ebbd69b0c85c82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e0dab6a37ec202054d249",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9405673edc5b574c4b3e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659eb126a54ffb89553317f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65600f2f3b3a73509b0907d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65701f65f0c610ed1b7145be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573effb3a256680f50b0eee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fec73d4c5dae4967254f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b763856a21080a27b0f7a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65844d675139e2e90e9f92c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a7b0d3a256680f527d4dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576cdff3a256680f512193b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d51f2cab7244e7d736569",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65800c6d5139e2e90e8e3653",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560218d3b3a73509b09ef57",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8f048c3057914763918e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582f2465139e2e90e99d780",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dd3548c3057914761d655",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65669785b371188f1408e10e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657470ca3a256680f50c419e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657be9e4cab7244e7d6e3b09",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569d1f8b371188f1421b460",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb14856a21080a27cffce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657549dd3a256680f50cfb03",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d28e16e702d09dcb0e491",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ed04acab7244e7d759632",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d2da46a37ec202052d497",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d2e486e702d09dcb12d98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cb2d35139e2e90eb96e5b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fb05328fe21a8cb0d6724",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e89198c30579147632bbc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a76b03a256680f5279808",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f017b371188f1412a882",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0ac1e28fe21a8cb104c77",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f7295139e2e90ea097db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569487ab371188f141c5086",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6563f733b371188f14048ba2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65975be756a21080a27073d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580f8435139e2e90e8fda9c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683edcb371188f1416b241",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576cf953a256680f5122b3d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658396895139e2e90e9a3648",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4057a572f93ea4c769289",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656427bbb371188f140535ba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594c8470771f87efe02a470",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a11ab371188f1420821c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657b0e26cab7244e7d6ba2ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a111d0572f93ea4c6f3a82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65781bc33a256680f51a11e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0cbab28fe21a8cb11ac15",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656581dcb371188f140717fa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d6da1cab7244e7d73d277",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6552e2e93de2a96680afcb83",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6578458e3a256680f51c2d91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8a4b8c30579147634031",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659568cb56a21080a26a1955",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577bd803a256680f51467b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554cfafd9b030bfa460995e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fa38bcab7244e7d767f49",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656852f9b371188f14185d6f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658154e45139e2e90e92e9a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bef6e6e702d09dcae2df1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a208bd572f93ea4c7140a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bf3cfcab7244e7d6e6b6a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cdbac5139e2e90eba1cae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657431943a256680f50bd946",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bcf34cab7244e7d6dbd31",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fb31c28fe21a8cb0d943b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572dcef3a256680f509409b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ef2bdd7c5b7ad6c74b222",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0c49528fe21a8cb11751f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a788c638d54fed6ef7f54d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659372930771f87efefa1f16",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc8b00a869296a4add7c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65681396b371188f14150421",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655fe12ed7c5b7ad6c78a211",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f5925139e2e90e9d984e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670707b371188f140f77d4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594c1b90771f87efe025eba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695e0ab371188f141d882e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cb94f9705a8d4ee201551",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65780b213a256680f51894da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab78bcab7244e7d694d06",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e79918c30579147628751",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8977d2c13221eb29e0ea6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ca6d89705a8d4ee1f0112",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f695828fe21a8cb0adf0a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e5742a54ffb8955313dc6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65732f9c3a256680f50a14c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562abc6b371188f140248e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657abdf4cab7244e7d69bdae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576672e3a256680f50e7d94",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566864bb371188f14088527",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659775b456a21080a271aea8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c4c4e984959b734ab8792",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65800b295139e2e90e8e2943",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65701778f0c610ed1b70dd5c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702e19f0c610ed1b723898",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f295b371188f140dd9fa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571d8131987e25e2586f7ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb34256a21080a27d2809",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fa04acab7244e7d7660d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698e24b371188f141f4b5d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d88c3a256680f51626f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570272cf0c610ed1b71b92e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ffab85139e2e90e8d4e26",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb33b56a21080a27d2789",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65816a9e5139e2e90e93f2f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b7bc956a21080a27b416b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b547256a21080a2795616",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d56e3a256680f515edd9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588eca95139e2e90eab5991",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e1bc26a37ec202055734d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d3b13a256680f515d299",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f5f4b371188f141311bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576d8053a256680f5128d29",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bcbb59705a8d4ee1da56b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658460375139e2e90e9fb54f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558edf65c50a1da629e87bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f4821a54ffb895533a642",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a2fd75139e2e90eafef23",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c8138984959b734ae213e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6574159b3a256680f50b7969",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dba25a3ebbd69b0c88745",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65965b1156a21080a26d0afa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65675b07b371188f141164d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658806095139e2e90eaa04c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9426673edc5b574c4bdd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658299805139e2e90e97d02c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bcc43a256680f5112df0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d5dcb6a37ec20205343af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8edc8c30579147638f3c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554c890d9b030bfa4607388",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568507db371188f14182fb7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa01a10fe49b1a4579f6a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658935b45139e2e90eadc2d4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6575331c3a256680f50cc678",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656870a0b371188f14196e31",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556fd0ffb19a42233c47e02",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658946e65139e2e90eae757f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65791a4a3a256680f51e15be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659507bb56a21080a26809c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657b0fb6cab7244e7d6ba94b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fb8bb28fe21a8cb0dcd20",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d5e0b984959b734afa3db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a71313a256680f5274d17",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ea1368c3057914764bdf5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657194631987e25e25858fd6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657427213a256680f50bb729",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655acf1b984959b734a44c9a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c540c984959b734abc13c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658259835139e2e90e95f2f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a20fb1572f93ea4c718253",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65558cf5d9b030bfa4624223",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657809be3a256680f5187748",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c832f6e702d09dcb02c7f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fcc100b62e4524652f97c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bef5ccab7244e7d6e5533",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b132e984959b734a64373",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655735e1677fedf2af3da8d5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b0b63984959b734a5f501",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659dfca36a37ec20205413aa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e3f5a5139e2e90ebf5adc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a32d2f572f93ea4c73bc20",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ad75c6e702d09dcac19ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b1e61984959b734a70088",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658406e25139e2e90e9eb735",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658016405139e2e90e8e96a1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a15484572f93ea4c700ad0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656444c1b371188f1405794c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8e15f2c13221eb2a114a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598fd6c56a21080a27683a5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559cda05c50a1da62a0566e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65841cdc5139e2e90e9f1e1e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65714519ea266f4fe6ac296c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c19cf984959b734a9ffd5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577bb1f3a256680f5144815",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657662033a256680f50e5064",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b2d836e702d09dcad5b15",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ecf88d7c5b7ad6c7392ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b2abc984959b734a7a7dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1122b572f93ea4c6f3d11",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ea25a8c3057914764c9ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f64d5139e2e90e9da869",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65561b4e54091050341ace88",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d7f62984959b734b0f86a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65714541ea266f4fe6ac2b6f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e9e4e8c30579147649a77",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65669e5bb371188f140953f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596244656a21080a26bb624",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573e7b03a256680f50ae887",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc5570a869296a4adafb2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582afb85139e2e90e98dfa7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656058fb3b3a73509b0bdf8f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f32cc0b62e452465286c9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fef9f28fe21a8cb0e63c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65718ec41987e25e25854df1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e2f806a37ec202055c578",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571306fea266f4fe6ab0a14",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b732d984959b734a8db69",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b277c6e702d09dcad4f4e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658100b75139e2e90e903310",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e48dca54ffb8955308ab6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65753bb53a256680f50ce318",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dc19b8c30579147619cc8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598056956a21080a274bc55",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9821673edc5b574c5e31",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566a29db371188f1409916e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a8f4256a21080a278c177",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565cb89b371188f1407d1ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596bc0d56a21080a26fffd0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65700bd5f0c610ed1b7084b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f028dd7c5b7ad6c7555cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f0c390b62e452465221da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af4fdefe16fbc49626152e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cff98ffc32fa81eb40760",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c4c63a256680f514cd1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6563ebedb371188f14047374",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a28a85572f93ea4c734299",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657811313a256680f5191301",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65596dd85c50a1da629ed08b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ea90307454fe5afc2d901",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65673229b371188f1410b99b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576d5dc3a256680f51275f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65687705b371188f14198388",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c9c93a256680f508731e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560195b3b3a73509b097d19",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597593356a21080a270618b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584124d5139e2e90e9f009e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65699a01b371188f14200fcc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586efc25139e2e90ea906ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a7a31d678d000ab219fe79",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ded588c30579147621877",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683878b371188f14164153",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c2980984959b734aaa13e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65950f9256a21080a2685db8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e787d5139e2e90ec0baa0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695442b371188f141d0eb1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566c7c2b371188f140c29c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c166bcab7244e7d708bf4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65766efb3a256680f50ecfcb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658933c85139e2e90eadad27",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554684c3de2a96680b21d68",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6557469f677fedf2af3dd5f4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554cdbcd9b030bfa46090cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658007165139e2e90e8e02fb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593d36a0771f87efefe4fe6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65829cef5139e2e90e980527",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65813f8b5139e2e90e91edb8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fa85d28fe21a8cb0d03e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b0ed55139e2e90eb4aa1e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656955d2b371188f141d2525",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684bc4b371188f1417c9d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598d54c56a21080a275e30a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dccec07454fe5afc11c63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b358a90b404a49855ae734",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572f95b3a256680f509c3d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657978cf3a256680f5247919",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db259a3ebbd69b0c80af9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d9033a256680f51630d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656068fb3b3a73509b0d1aa4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65741be03a256680f50b8edc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65547851d9b030bfa45e6678",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657910b23a256680f51d8169",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65936a460771f87efef9af2d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569eb40b371188f1422010e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586cf205139e2e90ea8d416",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff48fd4c5dae49672c863",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b68ca56a21080a27a74c9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559a4655c50a1da629fc02a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658aa0805139e2e90eb408ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702b4df0c610ed1b71fc4b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65742c283a256680f50bc43b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f0d4dd7c5b7ad6c7602b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658141345139e2e90e91f6a1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595269556a21080a2695ebb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f18f9d7c5b7ad6c76ba03",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4a396572f93ea4c780d16",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65855b145139e2e90ea4a07b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e34635139e2e90ebefbd8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65659055b371188f140735e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c8e83a256680f511e328",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec1de07454fe5afc442cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566ae5ab371188f140a6641",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c559b984959b734abcbeb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65822c9d5139e2e90e94ed0e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556aa8d54091050341b45ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d5af36a37ec2020533ed2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594dfa90771f87efe03d422",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bb803a256680f511201e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db1c0a3ebbd69b0c80201",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65657625b371188f1406ede7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566a530b371188f1409c35c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a112d6572f93ea4c6f431b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582b37c5139e2e90e9906bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659691e856a21080a26fa12c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c0a9ecab7244e7d7003a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658934b25139e2e90eadb801",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588ea9d5139e2e90eab44bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed08f8c30579147662d9b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658eb4f95139e2e90ec23951",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e6e835139e2e90ec06256",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b8b1e5139e2e90eb565d6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65814c355139e2e90e926eab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a5c613a256680f5265c51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555cadbfbfbe9529cebf057",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d4b33a256680f515e275",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c2cc16e702d09dcaf2e86",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580f4b55139e2e90e8fc391",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a60484115b1da58598341f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695138b371188f141cdd24",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657acbaacab7244e7d6aae12",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c19f6984959b734aa01ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65614e8c3b3a73509b0f426e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d4839cab7244e7d733cce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d2a515139e2e90ebc62e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65753b8c3a256680f50ce2e4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65606d283b3a73509b0d4da7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554d82dd9b030bfa460c872",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b3633984959b734a7f666",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571700a746d4d9eefbd0c84",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dcf3a07454fe5afc13ce7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656979c3b371188f141e5ec2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670510b371188f140f5727",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ee3f28c3057914767aebc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555bc9dfbfbe9529ceb89c3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65596ef35c50a1da629ed4bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c506d984959b734aba742",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d04a9ffc32fa81eb44ee9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659382730771f87efefaf9be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e88908c3057914763224f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572e9063a256680f5099677",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ab397e0fe49b1a457f4721",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a890c0678d000ab21c6901",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655843505c50a1da629c8301",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f0fab371188f1412ba46",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65718015746d4d9eefbdd832",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c5469984959b734abc51e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65640644b371188f1404c452",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593de4a0771f87efeff1ebc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65575bbd677fedf2af3e12e6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656060443b3a73509b0c882a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658c20b25139e2e90eb909c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b5b2f984959b734a883ba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657af577cab7244e7d6b642e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656031133b3a73509b0a7450",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c89a3a256680f51516ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559d8f45c50a1da62a078ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a494a2572f93ea4c775f59",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559fc9a5c50a1da62a0e98d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657868a63a256680f51c989b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65600368d7c5b7ad6c793144",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65840deb5139e2e90e9eec90",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65732a973a256680f50a0e3a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e7e938c3057914762afc7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8d8572c13221eb2a0726d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582ae265139e2e90e98cd01",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d5c496a37ec20205341e6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d1f426e702d09dcb0a689",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c2758984959b734aa8a50",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656581bdb371188f1407172e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65758bfd3a256680f50d6f24",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d617a6a37ec2020534b70",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b07d2bfe16fbc4962e5fd4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec78307454fe5afc48644",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571770e746d4d9eefbd53cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c382c984959b734ab1256",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554ccbad9b030bfa4608930",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65668cb1b371188f140895cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bc39256a21080a27e3fba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572cc3f3a256680f5088c38",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6557177e40992bf017bca1d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658446c95139e2e90e9f8212",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65731cd03a256680f509fc99",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6575380c3a256680f50cd3e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658114185139e2e90e91079d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560544b3b3a73509b0bab59",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680269b371188f1413f0fa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658016a15139e2e90e8e98fe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b037e984959b734a5beb8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65825d575139e2e90e96195e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65555a1dd9b030bfa4615f5e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f2cab371188f140ddde7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684836b371188f1417781e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f3f55139e2e90e9d81bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594fe0256a21080a267da2b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596084856a21080a26a7f23",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566c61fb371188f140c1ffd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c184ccab7244e7d70a11c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65810e9c5139e2e90e90dab1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568046ab371188f14142608",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656af1fa6e702d09dcacc4bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ead748c3057914765296b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573dc2c3a256680f50abf30",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c6e34984959b734ad8720",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b302e984959b734a7d675",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0eb8c28fe21a8cb129c38",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582b8f05139e2e90e993415",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a9b475139e2e90eb3e65d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f4ca2a54ffb895533cc6b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bde595139e2e90eb7e2f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e876b5139e2e90ec14092",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593b5cc0771f87efefc41bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ec0648c30579147657bf3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555dd4f540910503419ebe3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4fa77d9fcd3564fb18a47",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588c0245139e2e90eaa5ba6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658424c45139e2e90e9f37fe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b82b75139e2e90eb5014f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ace5530fe49b1a4584a43f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65619648b371188f14fffb98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0e7ae28fe21a8cb1268de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed8308c3057914766ede9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65729c7d3a256680f5077651",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cebc0ffc32fa81eb31e10",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65699131b371188f141f7840",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d04f85139e2e90ebb631c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598130e56a21080a274d0e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b6167f84d8003638a8b096",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d7fb26e702d09dcb4cf17",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0fe3c28fe21a8cb139380",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659687b356a21080a26f7a9b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65937f3f0771f87efefad880",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658117855139e2e90e91276f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e36475139e2e90ebf10ba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598e6dd56a21080a2762a31",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65658739b371188f140727ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d90316e702d09dcb5d8a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65792e7f3a256680f51f8e7a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659659dd56a21080a26cff0b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565a55fb371188f14076b7f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f0925d7c5b7ad6c75bd79",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e17846a37ec202055575a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b0a552fe16fbc496314a39",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db017a3ebbd69b0c7edea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556bac254091050341b5543",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fdfca0b62e4524653fac8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656956f1b371188f141d3732",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593679493243694688155fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff354d4c5dae49672b684",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567039ab371188f140f3bd2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a51df1115b1da5859592ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683d2cb371188f14169600",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656419e0b371188f14051399",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586ca705139e2e90ea8ce07",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a80cb371188f1420e71e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588da9e5139e2e90eaa9aed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d4ff2cab7244e7d735af5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657097bbe46926eabf1b2217",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e4c52a54ffb895530bece",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a61d53a256680f5269f8b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d2b975139e2e90ebc7491",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd70f0b62e45246536b25",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d21de5139e2e90ebbe7f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582a9845139e2e90e98912f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65701aa2f0c610ed1b70ff3a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6552ee2c3de2a96680afdbaa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657334073a256680f50a1ba1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658acb6c5139e2e90eb4627d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656943dfb371188f141bfdb1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658007775139e2e90e8e07e0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65718f211987e25e258551c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554cbdad9b030bfa4608313",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c694c984959b734ad3eab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c36f66e702d09dcaf6894",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65792e523a256680f51f8a51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fdabb371188f1413a7a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584fe4a5139e2e90ea100c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795abd3a256680f52209e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65781ae13a256680f519f70e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670b39b371188f140fae49",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a875b371188f1420ed57",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f11d5139e2e90e9d55d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6563600cb371188f1404316b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a5f763115b1da58597739d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d24866a37ec202052bbbd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a5dfea115b1da585968b8a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ac1c05139e2e90eb45664",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659631e656a21080a26c29d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6564139ab371188f140505fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d813c6e702d09dcb4e9e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657188cd1987e25e2584df41",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a10b91572f93ea4c6efe8d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65636e5cb371188f14044279",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f8c65139e2e90e9de354",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1ed66572f93ea4c7081d0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e4a28a54ffb8955309c98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655a9b225c50a1da62a21cfc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f89e5139e2e90ea0ae43",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657488703a256680f50c5d2b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65587f1a5c50a1da629d908a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af3153fe16fbc49624dfdf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659eabffa54ffb8955330f91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d4bf46e702d09dcb31110",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566eaacb371188f140d6824",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566d935b371188f140c87a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d9b358c3057914760d057",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559ac9b5c50a1da629fcbab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8d2e52c13221eb2a01fa8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65617a40b371188f14ff724e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ea7725139e2e90ec21a1c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d25eecab7244e7d72bc4f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656aeb6b6e702d09dcac9e8e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb19e56a21080a27d06f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a7acb3a256680f527d0ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65794e9c3a256680f52147b5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f8535139e2e90ea0a839",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597ca3956a21080a2742a21",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bc7c55139e2e90eb70f15",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65608f263b3a73509b0dfbaf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d753a984959b734b0932c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683397b371188f141601ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562d308b371188f1402eb40",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683f21b371188f1416b6e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562f4e4b371188f14034d46",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a2070f572f93ea4c713002",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588245e5139e2e90eaa1cfc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fa48728fe21a8cb0ccaa5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f2356d7c5b7ad6c771b02",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f18420b62e45246523be6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655852835c50a1da629cbeec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65826d615139e2e90e96bffd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fbea7cab7244e7d77ebbf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582d6b45139e2e90e99a3b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655a38f15c50a1da62a20f40",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657278123a256680f505d287",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566ae60b371188f140a668d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e5f90cab7244e7d74afa3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65952f3656a21080a269a499",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657279e53a256680f505e3aa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cdf545139e2e90eba40bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554e3f3d9b030bfa460fa5a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657921643a256680f51e9ed2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561794ab371188f14ff6f6c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fc92ecab7244e7d785049",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cd46c5139e2e90eb9e964",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dd4b18c3057914761d95f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572982a3a256680f5075a6c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b378760b404a49855cec11",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d4da26e702d09dcb32f36",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657289a93a256680f506cf8a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cf5c4ffc32fa81eb38802",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561ec7eb371188f140195e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65829fed5139e2e90e9825a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65583849677fedf2af3fabb1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d70e9984959b734b0615c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e81158c3057914762ca40",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582fa845139e2e90e99e12d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65767cf93a256680f50f8b21",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657811e43a256680f51926bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a201f1572f93ea4c71029c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560c01a3b3a73509b0ecfc5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65615d4a3b3a73509b0fa1f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588e0ad5139e2e90eaad85b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab644cab7244e7d69305e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659223105139e2e90ec554ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594dc5d0771f87efe03b0a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656017f63b3a73509b0969b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656813b6b371188f14150585",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fd41b371188f1413a112",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583e35c5139e2e90e9cbeeb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d5e9b984959b734afa897",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6589c3445139e2e90eafa2f4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ac7c8cab7244e7d6a6ec7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657975363a256680f5243c38",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65755e203a256680f50d2600",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3e4ca572f93ea4c76639d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aafaecab7244e7d6898ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568440cb371188f1417202d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65968ba556a21080a26f8891",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568474ab371188f14176bd1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ae10b984959b734a5093a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656049ad3b3a73509b0b1607",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65718197746d4d9eefbdf188",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a5eeb371188f1420cd87",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795ab43a256680f5220964",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ee813d7c5b7ad6c746be9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659676c056a21080a26e9e4f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684009b371188f1416c9a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554d33ed9b030bfa460b324",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657286913a256680f506a3c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588de235139e2e90eaabe38",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db0ffa3ebbd69b0c7f983",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a53403a256680f5262092",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4f3e4d9fcd3564fb14cf5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65766dcf3a256680f50eb7d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657993e63a256680f5255f00",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65548514d9b030bfa45eeed6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8de992c13221eb2a0da8c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ae07a6e702d09dcac58ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ff5d95139e2e90e8d0a87",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ba0f656a21080a27be306",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d7fa3a256680f5161a7d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b8b1c5139e2e90eb5659e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588ef865139e2e90eab7659",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc35f0a869296a4ad9c6d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aef0ecab7244e7d6b51f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657288e73a256680f506c56f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a36195572f93ea4c74745b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0f88128fe21a8cb1349cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e5581a54ffb89553127cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bbe93a256680f51124c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694ee1b371188f141cb9e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d88d66e702d09dcb56439",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65671098b371188f140fe303",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aa85a3a256680f528efec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65584dd25c50a1da629cac28",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fc2cb371188f14138dfa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584de605139e2e90e9fd1ba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fafdb371188f141372a8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e91ad5139e2e90ec1bf43",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656025e63b3a73509b0a219a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b2e84984959b734a7c71d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65559076d9b030bfa462581f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b42da984959b734a83049",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576e0963a256680f512d1f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bc5c7cab7244e7d6d5cdf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554ceecd9b030bfa4609581",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e49c75139e2e90ebfb2a1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e5091a54ffb895530f5f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fbe9ccab7244e7d77eb48",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1e138572f93ea4c704e2f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e12aa6a37ec2020551d6e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d1e3fcab7244e7d72a009",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655855605c50a1da629ccca9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572df773a256680f5095716",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961a3356a21080a26b3e1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65713b6fea266f4fe6aba63c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577ea313a256680f51713ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d6119cab7244e7d73a587",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656069383b3a73509b0d1c0a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a34498572f93ea4c7406b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657873eb3a256680f51cc44e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656746f9b371188f14111bc5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656061923b3a73509b0cb1e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572d6ac3a256680f508fd99",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65966dac56a21080a26e0cfe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65951fe556a21080a2690727",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695aafb371188f141d6524",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695578b371188f141d205a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ecaee667cec84fcd423b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b751c7aca77df7e7c21a35",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed6718c3057914766c1ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659673ab56a21080a26e6560",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65713b85ea266f4fe6aba7d4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656de1828c3057914761fb01",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a87f01678d000ab21b6902",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566fc55b371188f140ebae2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65902f125139e2e90ec47d57",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65936b3a0771f87efef9baff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593df1c0771f87efeff2580",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65615a693b3a73509b0f8cd6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b07048fe16fbc4962d2526",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702520f0c610ed1b719a16",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ca8d29705a8d4ee1f17ef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65798a983a256680f5253eb4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ab2eec0fe49b1a457ef3d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed1688c30579147663e4f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657307913a256680f509d7e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dd4c707454fe5afc16e82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659dfa206a37ec202053f98e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659666df56a21080a26daf4c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658926835139e2e90ead0fea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e3a5707454fe5afc27dfe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ff7ba5139e2e90e8d22f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658582415139e2e90ea52cfe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f071b371188f1412ae79",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657146a0ea266f4fe6ac3a7e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656068603b3a73509b0d1517",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65805bfe5139e2e90e8f6391",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c3f336e702d09dcaf91af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd4fb0b62e45246534cc3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555ad0cfbfbe9529ceb4b29",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65768b3f3a256680f5101ede",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ff04fcab7244e7d79136f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583e8795139e2e90e9ce92a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659651ad56a21080a26ca8d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657eb9f1cab7244e7d75811c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596756956a21080a26e8385",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f4ee5139e2e90ea07938",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9fd910fe49b1a4579e47c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d8ebaa3ebbd69b0c714a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558523a5c50a1da629cbdbb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657412813a256680f50b6963",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d3e13a256680f515d4d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579789c3a256680f52475bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658637675139e2e90ea57d29",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8b708c30579147635289",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596378956a21080a26c43c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a780d3a256680f527adfa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656587dab371188f14072936",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6574190a3a256680f50b8550",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659618a656a21080a26b2b80",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c4980984959b734ab7636",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65576f84677fedf2af3e5376",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565de35b371188f1407f034",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658145035139e2e90e921743",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab977cab7244e7d6973c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e91fd8c3057914763c1b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d37c56e702d09dcb1c20f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f633328fe21a8cb0a967c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fc4c7cab7244e7d783350",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657047b6e46926eabf19f73c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657812bb3a256680f5193acb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ba77656a21080a27c3ac9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab50ecab7244e7d69134e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656077fe3b3a73509b0da444",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6599019256a21080a2769b77",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a09e4728fe21a8cb0f5604",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961b7456a21080a26b4d44",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a808a3a256680f52819a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bd4f45139e2e90eb77961",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65715b48e1c4488437d00df0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d43126e702d09dcb2823d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657412ec3a256680f50b6c2d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dcec107454fe5afc137a5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582b04d5139e2e90e98e584",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658529eb5139e2e90ea2ace3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658946135139e2e90eae6bb5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659616f756a21080a26b1498",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655791c4677fedf2af3eae19",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a22a20572f93ea4c7206e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569b81bb371188f14215931",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559bd845c50a1da62a0082c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65685b21b371188f1418d63a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572d1e73a256680f508c83e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d90fe6e702d09dcb5e390",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554af28d9b030bfa4600285",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a333f8572f93ea4c73cd31",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656807a0b371188f14145604",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560506f3b3a73509b0b6ef9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65adc89f0fe49b1a4585c2a8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65594df45c50a1da629ea10e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656caf976e702d09dcb068b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571a55c1987e25e25862e4e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3cf88572f93ea4c763e89",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a7d933a256680f527f3cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bbb8956a21080a27dc10c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65990d2a56a21080a276dfe9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c9bb3a256680f511ec18",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65758e833a256680f50d7412",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b358b984959b734a7f2d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566fab9b371188f140e8134",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bdaa1cab7244e7d6e0c96",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695c79b371188f141d758b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cc5129705a8d4ee20b3f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d4bb26e702d09dcb30a33",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d36df5139e2e90ebd0124",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581016c5139e2e90e9040ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569e162b371188f1421e659",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595193156a21080a268c4fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597808556a21080a2724d2c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65854b575139e2e90ea414f4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f5125a54ffb895533f272",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65732b5d3a256680f50a0f86",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a113ea572f93ea4c6f4e38",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579727c3a256680f52404c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65701823f0c610ed1b70e367",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d2a975139e2e90ebc6742",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d92396e702d09dcb5f208",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff82dd4c5dae49672f2c9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65602d183b3a73509b0a639e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a21728fe21a8cb0f8c00",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ee88bd7c5b7ad6c746ed0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657681df3a256680f50fc289",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571815f746d4d9eefbdec8c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655841ef677fedf2af3fdd5d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a76c85139e2e90eb2461e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562e5b8b371188f14032b46",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656161cd3b3a73509b0fc640",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573e7303a256680f50ae5fe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e92cd8c3057914763d38d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eaa0f8c30579147651aba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65630231b371188f14036c8b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65558153d9b030bfa461f2eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a9be05139e2e90eb3e9e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581137f5139e2e90e910285",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65692d06b371188f141af24d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c1eb5984959b734aa360d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d43b16e702d09dcb28d53",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582bb1a5139e2e90e9940b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657028b0f0c610ed1b71d1f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d2b8c6e702d09dcb10536",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566c8c5b371188f140c3029",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d91b06e702d09dcb5eb70",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555a80afbfbe9529ceb3b6c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9828673edc5b574c5e50",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656063943b3a73509b0cce9c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657425113a256680f50baf6f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65810c565139e2e90e90be3f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65672ec9b371188f1410ad4d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ba63b56a21080a27c2987",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6564241cb371188f14052f3b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a75a5f38d54fed6ef6a84a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c7d83a256680f511d633",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65715694e1c4488437cffc58",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a92c15139e2e90eb390f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65699de0b371188f14205343",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694d0cb371188f141c9ec7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596ac4e56a21080a26fd721",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dabaca3ebbd69b0c7c0bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d6b1e984959b734b021c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565e3d2b371188f1407fbd0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ad0a3cab7244e7d6ae368",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d4e236e702d09dcb33691",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598c3db56a21080a27571e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572bcfc3a256680f507fe7c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657117f1e46926eabf1b605e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657414cc3a256680f50b7598",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b5ae756a21080a279a534",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581055c5139e2e90e906ddd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a649cf38d54fed6ef19ae6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695d6cb371188f141d81db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593d9a40771f87efefec8da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f303fd7c5b7ad6c777e21",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65714d55e1c4488437cfcf51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c1b9e984959b734aa171a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566bf6ab371188f140be663",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f1b39d7c5b7ad6c76d12f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c89f96e702d09dcb03574",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c1513a256680f5116c01",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a47228fe21a8cb0fb22a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c9fd3a256680f508747a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596855756a21080a26f64ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583e25c5139e2e90e9cb362",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a3adf5139e2e90eb06056",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a3dcd5139e2e90eb07fee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab629cab7244e7d692dca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65796d163a256680f523a565",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb8c356a21080a27d8e5d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a24193572f93ea4c726ac5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657909e53a256680f51d45c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65632f68b371188f1403d015",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65938e860771f87efefb76c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657829963a256680f51b5519",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684f1cb371188f1418158a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656064e23b3a73509b0ce3be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a111ae572f93ea4c6f3924",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8c8392c13221eb29fa44f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559609d5c50a1da629eb660",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f0c1fd7c5b7ad6c75f0e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f23bcd7c5b7ad6c771f6b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703317f0c610ed1b729e1c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d370a5139e2e90ebd036e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593cb260771f87efefd99fe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576b4a23a256680f510d784",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6575d6b83a256680f50de2f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ae8fd6e702d09dcac921c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d41b26e702d09dcb26dd1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db1baa3ebbd69b0c80190",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65966af556a21080a26de514",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cf4e55139e2e90ebb1bf2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65851ae85139e2e90ea1f309",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd61c0b62e45246535b51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d91756e702d09dcb5e814",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e81048c3057914762c9c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b78d356a21080a27b29b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657eaf6bcab7244e7d756742",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3b361572f93ea4c75ed5d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d2f7d5139e2e90ebca332",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582ac405139e2e90e98b273",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eb08407454fe5afc32dbb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65672acdb371188f1410a038",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567e93db371188f141230c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583a2be5139e2e90e9ab16d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b6ba956a21080a27a9c3a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656edb368c30579147671f4e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b304b6e702d09dcad6043",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bf97d9705a8d4ee1e3805",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65768f423a256680f5103077",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f4cb2a54ffb895533ce4e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65869b585139e2e90ea71644",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657967773a256680f5232982",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657288ef3a256680f506c5bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ac91dcab7244e7d6a8909",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581478f5139e2e90e923457",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dd1fd8c3057914761d1a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65570a61fb19a42233c4b19a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b16b3984959b734a69478",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff0c4d4c5dae49672920d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d8d566e702d09dcb5a9f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a2397a572f93ea4c7248e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65727b233a256680f505ec3d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a95528fe21a8cb1015dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e9a8b8c30579147645d89",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fa017cab7244e7d765ed6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65869e495139e2e90ea73f3f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658fc69a5139e2e90ec3de89",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bcbe3a256680f5112dd6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a5e8e0115b1da58596d039",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e5183a54ffb895531008d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eccb4d7c5b7ad6c736bb2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9e7490fe49b1a4578ebc1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9e64e0fe49b1a4578e040",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b79805139e2e90eb4cd45",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566b1d9b371188f140abc84",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658017d45139e2e90e8ea242",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c83bc984959b734ae368b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656de13e8c3057914761f9a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0ebeb28fe21a8cb129fc1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586f4b15139e2e90ea90ecc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598acc356a21080a2751478",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683da9b371188f14169cbd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566c5b9b371188f140c1d83",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656703d8b371188f140f3f99",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fa6ad28fe21a8cb0ceda0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f789b371188f14132f49",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65642193b371188f14052b3c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795f2d3a256680f52266d5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556d7cc54091050341be490",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8feb8c30579147639c33",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657976e93a256680f524524d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593ccba0771f87efefdb867",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567124fb371188f140fece0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bf606cab7244e7d6e767f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bf5e3a256680f5114d71",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65643348b371188f14054fde",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65950aa156a21080a2682553",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d070bffc32fa81eb47311",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65728a793a256680f506d8a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bec296e702d09dcae17b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65644589b371188f14057bf3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ffee85139e2e90e8d91a5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65accc9d0fe49b1a45844037",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b85375139e2e90eb51406",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680fafb371188f1414d2c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65991ccb56a21080a27744eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d56446e702d09dcb39e2d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f7c85139e2e90ea0a09c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586a4465139e2e90ea79f2a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ee1b78c30579147678cfa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702497f0c610ed1b719297",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583d5ef5139e2e90e9c40b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586819e5139e2e90ea65f14",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576de563a256680f512c0c3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695d0cb371188f141d7cb8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560a1ea3b3a73509b0e4980",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65646bb1b371188f1405e5f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a5dcc3115b1da585967486",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657b1258cab7244e7d6bafe9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656951a9b371188f141ce23d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656da3678c30579147612ad8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db01ea3ebbd69b0c7ee36",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658659e05139e2e90ea60abd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659567f056a21080a26a184d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ce09e5139e2e90eba5d89",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597b73856a21080a27394ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657713d83a256680f513745a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65796cb23a256680f5239dc6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fb6c3cab7244e7d777974",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da70ea3ebbd69b0c79705",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af5982fe16fbc496264a76",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f9f2c28fe21a8cb0c608f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65701ac0f0c610ed1b7101e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65654d26b371188f14067d26",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d6c4e984959b734b02b3b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e16386a37ec2020554c44",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656053013b3a73509b0b9285",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e687ea54ffb89553202cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597c55856a21080a2740c7f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658518105139e2e90ea1e102",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65951b7056a21080a268de3f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65975aea56a21080a2706da9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596753e56a21080a26e8136",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655578d6d9b030bfa461c20b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65701621f0c610ed1b70cf1b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556147654091050341abce7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a85fc5139e2e90eb2fcfd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa2da60fe49b1a457b20e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b551356a21080a2795d8d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65853bc05139e2e90ea35ca9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a9f185139e2e90eb401d5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e49b45139e2e90ebfb1c8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a45e28fe21a8cb0fb05e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d92ad6e702d09dcb5f81e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65671764b371188f141012e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65668b85b371188f14089060",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657180d6746d4d9eefbde21d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c9c656e702d09dcb057c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657186041987e25e2584a9ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a20a72572f93ea4c715088",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561656c3b3a73509b0fdc69",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d6c7c5139e2e90ebdd580",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658504a15139e2e90ea13c96",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656606eab371188f14083b36",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f983128fe21a8cb0c0be2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596473356a21080a26c7e56",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bb4b4cab7244e7d6ca226",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed2a68c30579147665195",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ef7b7d7c5b7ad6c74ddc9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e0e4c07454fe5afc23c05",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fb4e028fe21a8cb0da4db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562dc04b371188f1403013a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a7c315139e2e90eb2684f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab7e3cab7244e7d6954ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65781d363a256680f51a365f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a38055572f93ea4c74f9f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b61876e702d09dcad9b75",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a2089d572f93ea4c713fc3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65687974b371188f141994cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596b20256a21080a26fe228",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65758c303a256680f50d6fde",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656165933b3a73509b0fdd3e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655a33fa5c50a1da62a20a7f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583e97d5139e2e90e9cf1ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658064b65139e2e90e8f7244",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fb6e728fe21a8cb0dbf82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c23996e702d09dcaf0a33",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9fb2a0fe49b1a4579d4db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ea021a54ffb895532fc2d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bfe60cab7244e7d6ede5d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a345d1572f93ea4c740c50",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e77a48c30579147627d02",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594cc0b0771f87efe02e0de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595633556a21080a26a1097",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f0013d7c5b7ad6c7534c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594cebe0771f87efe030e1f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65782d123a256680f51b9d4f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65811ca75139e2e90e9146a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657baeb5cab7244e7d6c62d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572d11e3a256680f508c399",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659c9eaa9705a8d4ee1eb822",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583b5f25139e2e90e9bac86",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572847d3a256680f506800e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571a0451987e25e258611eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f7b1b371188f141332ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0e8d928fe21a8cb127467",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656abbdb6e702d09dcab944d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab871cab7244e7d6960d6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65653eb8b371188f1406630e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c3435984959b734aaf098",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f0369d7c5b7ad6c7563dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554c76dd9b030bfa4606f2f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b97605139e2e90eb602bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659394a40771f87efefb95ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580ed6b5139e2e90e8faa22",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d49e16e702d09dcb2eb46",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b918956a21080a27b8c2b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583b5035139e2e90e9ba042",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655acdb7984959b734a43efb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c290c984959b734aa9b40",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656992beb371188f141f9400",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656efcfc0b62e45246520044",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658116285139e2e90e911a35",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d09a95139e2e90ebb7552",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555cb10fbfbe9529cebf18e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65701224f0c610ed1b70a879",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1ddcb572f93ea4c7047a1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a09c0928fe21a8cb0f418b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c49e76e702d09dcafb952",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658010b65139e2e90e8e64ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65718d471987e25e2585390c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657038def0c610ed1b731aef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bad1956a21080a27cad4f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c7b77984959b734adfe6b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c4f7d984959b734aba0f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657669ca3a256680f50e94fe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d577e6a37ec202053371a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b21d63bbde1921677dbc4d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dafaea3ebbd69b0c7e74d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655cb1f1984959b734aeb526",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561f3e0b371188f1401aa9b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588f4f55139e2e90eabbb26",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af656cfe16fbc49626c16b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f7058d7c5b7ad6c7868f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570091cf0c610ed1b70779c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cb2529705a8d4ee1fa23b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65765f613a256680f50e4095",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c31b3a256680f514b6d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569bf9cb371188f1421789c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795fed3a256680f5227b61",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e85f68c30579147630332",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b8ef05139e2e90eb5937b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a787d5139e2e90eb25217",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556c72654091050341b8a0e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658002205139e2e90e8dc0dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565b231b371188f140797a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657914813a256680f51db8db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560409d3b3a73509b0abe40",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fab7f28fe21a8cb0d2eae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65681b90b371188f141544b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c3f23a256680f514c243",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da502a3ebbd69b0c7896c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588d07b5139e2e90eaa6c7c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a5f9156a21080a278980e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d2a656a37ec202052cb0a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b863256a21080a27b671e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d05eeffc32fa81eb462a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d8efa6e702d09dcb5c77c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657911a03a256680f51d8d6a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655472421b75146e90df5845",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658501e85139e2e90ea11d7b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556d82854091050341be61c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659375fa0771f87efefa5f39",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a36305139e2e90eb0283d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65669e21b371188f14095082",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dc5bc8c3057914761a9c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659388970771f87efefb48b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657924323a256680f51ed1e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795fa33a256680f5227213",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b5efe56a21080a279e2b1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573e9b83a256680f50af424",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65714722ea266f4fe6ac3f43",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ece168c3057914765fd99",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe955d4c5dae496722941",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db47fa3ebbd69b0c82b39",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e05f107454fe5afc222dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656706d4b371188f140f74da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554879ed9b030bfa45f1094",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa06580fe49b1a457a03c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cdeda5139e2e90eba3b66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0bb2628fe21a8cb110978",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65642065b371188f14052981",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a7d5a3a256680f527f09e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659628ba56a21080a26bda30",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579222d3a256680f51eac68",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c5656984959b734abcea2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65956da456a21080a26a2660",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65700deff0c610ed1b708f33",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8e5522c13221eb2a1539c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c0f01cab7244e7d703443",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6587e62a5139e2e90ea9e4eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655efff8d7c5b7ad6c753314",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d3fe26e702d09dcb25085",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595591356a21080a269fb05",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556365354091050341b17ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b05d1bfe16fbc4962c2a3a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1fc70572f93ea4c70d8d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597a9a756a21080a2730df9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65771cc83a256680f5139490",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ebd0207454fe5afc3fc87",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657448053a256680f50c10e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561bec7b371188f14011e91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567ff33b371188f1413c4cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d989b8c3057914760b6ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0e32128fe21a8cb123cad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597b2e956a21080a2736dbc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657288aa3a256680f506c1f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656aa4cd673edc5b574cb63f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4951d572f93ea4c7763f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658108fd5139e2e90e908efa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65864fc95139e2e90ea5e191",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571a11a1987e25e25861979",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e91b05139e2e90ec1bf56",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a20164572f93ea4c70fd5c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656224fcb371188f1401f22b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8ddb8c30579147637a35",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a364f7572f93ea4c747c2b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d8d53a256680f5162d5f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8a0c92c13221eb29ec469",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656348ecb371188f14040698",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566d6f5b371188f140c796b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593cc950771f87efefdb4b1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a7f303a256680f5280803",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b53c7984959b734a86b24",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581339e5139e2e90e91a463",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6564545fb371188f14059ba0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555cea2fbfbe9529cec14df",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583efad5139e2e90e9d4023",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a975d673edc5b574c5923",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658042755139e2e90e8f1b21",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ace64984959b734a44530",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554bad0d9b030bfa4603cfd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657296dd3a256680f50752ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573e8443a256680f50aed63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658245ad5139e2e90e952292",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f30fcd7c5b7ad6c7789f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e6a47a54ffb8955321376",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65699db2b371188f14205085",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65962af256a21080a26bf2c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6575538c3a256680f50d13a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596727d56a21080a26e552e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f8c95139e2e90ea0b0dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d913ca3ebbd69b0c72382",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0b14028fe21a8cb10a61a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a23da7572f93ea4c7258dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65850aaa5139e2e90ea1732a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658932005139e2e90ead9891",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d5fbe6a37ec2020534834",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d479d6e702d09dcb2c782",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ea51407454fe5afc2b515",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659679d456a21080a26ed1c8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cfe1cffc32fa81eb3ede7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f7535139e2e90e9dc1e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af7ed3fe16fbc49628b799",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fc36828fe21a8cb0e0fd6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659114be5139e2e90ec4edae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a40935139e2e90eb0a8f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e5fa3cab7244e7d74afb6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65792ac13a256680f51f372a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655491e8d9b030bfa45f6889",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658834315139e2e90eaa2cd0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d66c0cab7244e7d73b5ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b2991984959b734a79ee8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c70a5984959b734ada4b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566b8d1b371188f140b8dba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65771bea3a256680f5139098",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e85118c3057914762f4fe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b586756a21080a279870c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d327c6e702d09dcb16eff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659377b40771f87efefa7b42",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584577f5139e2e90e9fa3ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ea4b95139e2e90ec2171a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655985225c50a1da629f4b5e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657962573a256680f522b4f4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0fd4228fe21a8cb138611",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593b8bf0771f87efefc6532",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa5ebc0fe49b1a457d99be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a53a5c115b1da58595d1e6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa00e70fe49b1a4579f4d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597de1756a21080a27474ef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a9b273a256680f5288f2b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658537655139e2e90ea32f35",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656840f7b371188f1416df38",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577babc3a256680f514439b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ee0888c30579147677ae5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff8b9d4c5dae49672f710",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bbc9e56a21080a27dd52f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694fafb371188f141cc4cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593c1f00771f87efefcd74c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a7b024678d000ab21a7952",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ab84a5139e2e90eb44717",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572d75d3a256680f509036d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588fdb65139e2e90eac1d27",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d49956e702d09dcb2e65d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d62eb6a37ec2020534d73",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c3f84984959b734ab36b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65561abd54091050341acd7f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d89b0a3ebbd69b0c6f88e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555902fd9b030bfa46255cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e25ac6a37ec202055a067",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659675e556a21080a26e90f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ac84dcab7244e7d6a77cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656021b83b3a73509b09f22c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566bb2ab371188f140bb58f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65825ab65139e2e90e960075",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cb68d9705a8d4ee1feb39",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65771e7f3a256680f51396f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f6405139e2e90e9da6d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698bdab371188f141f262a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555c158fbfbe9529ceba885",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c23806e702d09dcaf096e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65800f005139e2e90e8e526c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f958e28fe21a8cb0bee23",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d32236e702d09dcb16b32",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ffc385139e2e90e8d6aca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9fc000fe49b1a4579db31",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712237e46926eabf1ba71e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db7e2a3ebbd69b0c861c8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65929aa85139e2e90ec5a233",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fc580cab7244e7d78386d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed3a48c3057914766670d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e48b45139e2e90ebfab75",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fdf170b62e4524653f0ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f1627d7c5b7ad6c769993",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bc8a3a256680f5112bcf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65672b21b371188f1410a145",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573ef6d3a256680f50b0d4a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65645a9eb371188f1405a833",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658183275139e2e90e944c66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c3c976e702d09dcaf8103",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579183f3a256680f51ded17",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f644b371188f14131857",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569378db371188f141b3c84",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598bdab56a21080a27553eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a7d3d673edc5b574bea1c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d4520cab7244e7d7335b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eed230b62e452465168da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576beab3a256680f511450e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d3a4e6e702d09dcb1f246",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a5bc33a256680f5265753",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e87055139e2e90ec13bb2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ca5206e702d09dcb05e98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594e75f0771f87efe04089c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65630896b371188f14039163",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fc178cab7244e7d781218",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65991aba56a21080a27737b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594ec1356a21080a26798b5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656841f8b371188f1416f37b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657418753a256680f50b8291",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656800f9b371188f1413dc1f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656564a2b371188f1406b41b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656985ebb371188f141ed0ef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d39f35139e2e90ebd2381",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583ff535139e2e90e9e5bd1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65854e215139e2e90ea430ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c2633a256680f5117b31",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e86768c30579147630a00",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d7ac6984959b734b0c87c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65606a663b3a73509b0d31e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c6dc3a256680f511c93b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657994303a256680f5255fdc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656aa465673edc5b574cb2ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ea2148c3057914764c746",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f6a3b371188f14131ed0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d27416e702d09dcb0d386",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c4627cab7244e7d715a03",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bae07cab7244e7d6c5dcb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d7d8c984959b734b0e23f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655798fa677fedf2af3eb866",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65572c7f677fedf2af3d5d2b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e78875139e2e90ec0bb25",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f507cd7c5b7ad6c78195f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657472ab3a256680f50c4322",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65937cdb0771f87efefabd63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588e57f5139e2e90eab0759",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd9cb0b62e4524653977c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e4c665139e2e90ebfc2b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ccd42ffc32fa81eb2a8c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d3c53a256680f515d3c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656edf478c305791476766e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65938ad90771f87efefb6469",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65605f8a3b3a73509b0c7495",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc97e0a869296a4ade3fa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577e0873a256680f516b4e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d8b2aa3ebbd69b0c700a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b6b2e56a21080a27a9590",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558bb8e5c50a1da629e34bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583e92d5139e2e90e9ceff9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a7fd9673edc5b574bf43f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a10b1d572f93ea4c6efa82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65718bc21987e25e25851dfb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597c9ba56a21080a274272c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d2b885139e2e90ebc73a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595072956a21080a26805c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6575afe53a256680f50d9f9e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656073873b3a73509b0d8a62",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cff4fffc32fa81eb402aa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a93a0673edc5b574c48f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9e9a673edc5b574c8bb3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e1cf46a37ec2020557bfd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c4d936e702d09dcafc3e4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583bbfe5139e2e90e9bd781",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659409890771f87efeff91fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556db6d54091050341c0ad1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c0c90984959b734a994a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a140ab572f93ea4c6fdc94",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597c36456a21080a273fb5f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f1a99d7c5b7ad6c76cd4d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554ca3dd9b030bfa4607b52",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ee68fd7c5b7ad6c7465b5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657f0814cab7244e7d75deb1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c167dcab7244e7d708d2f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b84965139e2e90eb50ecb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655af865984959b734a58afb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680c78b371188f1414a8e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d0927ffc32fa81eb499c9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9a715139e2e90eb624a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559f46e5c50a1da62a0b898",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573189c3a256680f509f13c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ae83c6e702d09dcac8f48",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ce4dc5139e2e90eba88b4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a10942572f93ea4c6ee43a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bce8e9705a8d4ee1db4c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a20cda572f93ea4c71666a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f0155139e2e90ea04377",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65655b46b371188f14069a61",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0968028fe21a8cb0f114c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ac27f984959b734a3a8b5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65922c155139e2e90ec561ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656808e0b371188f14146bc8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568539bb371188f141866e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65682ce1b371188f1415c04a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555f69054091050341a73d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b61e356a21080a27a0b66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c2558cab7244e7d70ffba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a21bac572f93ea4c71d860",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583bb735139e2e90e9bd519",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684b07b371188f1417b717",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65709fcbe46926eabf1b3049",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65606afa3b3a73509b0d3a76",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65719c9a1987e25e2585f50a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657114e9e46926eabf1b55f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657175e7746d4d9eefbd4908",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d6d216e702d09dcb44bdd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658006f55139e2e90e8e01fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658561595139e2e90ea4ccac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da154a3ebbd69b0c7730e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65697a3ab371188f141e62df",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65583cd3677fedf2af3fc804",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656434c5b371188f140552b5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656880c6b371188f1419ab29",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ff0bfcab7244e7d791583",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ee91ed7c5b7ad6c7470e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582c2ba5139e2e90e996845",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65582de6677fedf2af3f7000",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577e1c03a256680f516c6fa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657186501987e25e2584aee7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659dfaa76a37ec20205400c8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ea68a8c3057914764f756",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655df7da07454fe5afc1fae2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c0c0bcab7244e7d701013",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bb63c5139e2e90eb6d5e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65767b8d3a256680f50f783e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d0405ffc32fa81eb444c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555b599fbfbe9529ceb6987",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a79da7678d000ab2199a2a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570267bf0c610ed1b71b0ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ee2048c30579147679259",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577cadf3a256680f515471f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657844a33a256680f51c2b3f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bf1745139e2e90eb891e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f90c528fe21a8cb0bb944",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65602e973b3a73509b0a6b1b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65571256fb19a42233c4dc43",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566e37bb371188f140d08c8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f573cd7c5b7ad6c7834ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cd62fffc32fa81eb2cac9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fec96d4c5dae4967257ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bfdce6e702d09dcae81f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657176b7746d4d9eefbd4e63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af22e3fe16fbc49623e8e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656249c9b371188f1401ff48",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658114745139e2e90e9109ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65634fdcb371188f14041274",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c1ae2984959b734aa0ddb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f1bc2d7c5b7ad6c76d909",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694c75b371188f141c96d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961b2956a21080a26b4923",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659caf199705a8d4ee1f74b1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582b2e45139e2e90e98fe4e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567207cb371188f1410653b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d4f43984959b734af5768",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ab68e5c50a1da62a2846d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65699275b371188f141f8f66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657013c0f0c610ed1b70b813",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cc9409705a8d4ee20df91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d3e33cab7244e7d73176a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bacd556a21080a27ca794",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572891d3a256680f506c89f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65936b040771f87efef9b874",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cf3165139e2e90ebb0f5c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659baa4756a21080a27c734f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b016b984959b734a5b27f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bc5a39705a8d4ee1d6b70",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e75aecab7244e7d74dea5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ff6b55139e2e90e8d1528",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d7f2f6e702d09dcb4c612",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b5f0c56a21080a279e425",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566b99db371188f140b9de4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584ffea5139e2e90ea10f47",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6578292d3a256680f51b4d00",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655cc433984959b734af0194",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f9b5128fe21a8cb0c316e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a6b523a256680f5270ac6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560b3853b3a73509b0ea6aa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572976c3a256680f50756cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4944a572f93ea4c77598f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658931e55139e2e90ead96c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598de3556a21080a2760a82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582a28a5139e2e90e983c0b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568984fb371188f141a1a7b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658511865139e2e90ea1aa22",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a08e3e28fe21a8cb0ee9e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ed164d7c5b7ad6c73ad8c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555aee5fbfbe9529ceb5685",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c9b4b6e702d09dcb05692",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65654b06b371188f14067940",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560962a3b3a73509b0e0fc7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659eb75ca54ffb89553324c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657965e53a256680f5230941",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8a9222c13221eb29f1da7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c0a716e702d09dcaeb85c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566a4c1b371188f1409ba95",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580e8eb5139e2e90e8f9d26",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655390443de2a96680b07685",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d5a73a256680f515f00b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0f9e328fe21a8cb135ada",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572b1863a256680f507cd16",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658155585139e2e90e92ef7f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f56c1d7c5b7ad6c7832ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b722e984959b734a8d8f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a24201572f93ea4c726db2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596741656a21080a26e6c27",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d5779cab7244e7d7380b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e90e48c3057914763a9ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c73776e702d09dcb01245",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658541dd5139e2e90ea3a16e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d3d2c5139e2e90ebd46ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e13386a37ec20205526c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a5fd9a115b1da58597d194",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6578297f3a256680f51b52cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65617be7b371188f14ff787f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583dfe45139e2e90e9c9b79",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a5e1f9115b1da5859698f4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e6518a54ffb895531e15c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b0b91252111443bcc4c64f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dd77c07454fe5afc17e0a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596210156a21080a26b94cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e116e07454fe5afc24620",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c66ab984959b734ad06e4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aced3cab7244e7d6acf32",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d2c686e702d09dcb11069",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566ff19b371188f140eebc1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f1f1b371188f1412c82f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ae2756e702d09dcac69df",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a50985139e2e90eb19510",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572bc1d3a256680f507f96b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65580f47677fedf2af3f0241",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571555ce1c4488437cff5b5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680b5ab371188f141499a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c177d984959b734a9eae3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657589d43a256680f50d6d76",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659df0ad6a37ec202053a517",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e696d5139e2e90ec0377b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8e1632c13221eb2a114b5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c191e984959b734a9f77e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e86bd5139e2e90ec13959",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658408a85139e2e90e9ec803",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656982d6b371188f141ead8a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c6b256e702d09dcaffe54",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a87ed5139e2e90eb31c07",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585385f5139e2e90ea33572",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581491a5139e2e90e924766",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b5e0e56a21080a279d847",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597c66256a21080a274135c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6564506ab371188f14059314",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fd39a28fe21a8cb0e38f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ae7efefe16fbc49622bb20",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566aecdb371188f140a72cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561e231b371188f1401721d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a98fb371188f1420fb3d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571a4c21987e25e258629cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ebe1207454fe5afc40d4f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a21181572f93ea4c7192ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576a51d3a256680f510859a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e14b16a37ec20205538cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684b3db371188f1417bc20",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a15b84572f93ea4c70189b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65669a88b371188f14091904",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659dfd036a37ec20205416f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656432feb371188f14054f65",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684882b371188f14177cc8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573ec323a256680f50afd60",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ac5066e702d09dcabbb4f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658289c75139e2e90e974da4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657027b6f0c610ed1b71c0e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655824fc677fedf2af3f4bb0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ece80d7c5b7ad6c738397",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655877ec5c50a1da629d64ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ae2896e702d09dcac6ab0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65710d0be46926eabf1b49a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65576526677fedf2af3e2cde",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569b6edb371188f1421532c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566a60ab371188f1409cdec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ecc50d7c5b7ad6c7363db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65605d263b3a73509b0c4090",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588f74b5139e2e90eabd92e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670e6fb371188f140fce90",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c4373984959b734ab4c3a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586c0c55139e2e90ea8bea0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657285603a256680f506925c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566c85ab371188f140c2e24",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558ba655c50a1da629e3145",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593abd90771f87efefbe4c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af39fcfe16fbc496257931",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d31c9cab7244e7d72ec3e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657287ea3a256680f506b85e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b0f0bd52111443bcc8e60f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ee196d7c5b7ad6c744aff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65936b5c0771f87efef9bc1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a49a28fe21a8cb0fb454",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc3a40a869296a4ad9f2c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d82e66e702d09dcb504e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559c7445c50a1da62a02f9b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ae97f5139e2e90eb49486",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576831c3a256680f50fd307",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b25d7984959b734a76ba9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ac92c40fe49b1a4583109f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b5eb456a21080a279df3a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65975cf756a21080a2707d25",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656998c4b371188f141ffa06",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d72375139e2e90ebde04d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c3063a256680f5082fc4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a8efa5139e2e90eb372d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65954bed56a21080a269e806",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584027a5139e2e90e9e886e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596071756a21080a26a77cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656031053b3a73509b0a7422",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed3d38c30579147666b1d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fbb3828fe21a8cb0de262",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ab3175c50a1da62a26e78",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65824d115139e2e90e95550f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff74ed4c5dae49672eb8a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c7c10984959b734ae019e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655df54407454fe5afc1f3c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566d200b371188f140c5a0d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e6039cab7244e7d74b11a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e9c0a07454fe5afc29559",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65615d793b3a73509b0fa34d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680c29b371188f1414a499",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656040213b3a73509b0abd59",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684a61b371188f1417a321",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596538856a21080a26cb8fb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658123235139e2e90e91602b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658672085139e2e90ea642ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657820e03a256680f51a90fd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598b4f056a21080a2752d09",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fbf4acab7244e7d77f32f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d0621ffc32fa81eb46548",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596679156a21080a26db892",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566afeab371188f140a8e71",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a7fa25139e2e90eb28a28",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e81ad8c3057914762ce10",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658157885139e2e90e931947",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65975bfd56a21080a2707451",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c4836cab7244e7d71608a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65600abf3b3a73509b08d03e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717a71746d4d9eefbd8379",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c71da984959b734adb216",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670526b371188f140f5891",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a104cf28fe21a8cb13e7ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab8f7cab7244e7d696c81",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656801e4b371188f1413e807",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573c5063a256680f50a6a71",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b79ac5139e2e90eb4cdeb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594c1300771f87efe02582b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579726f3a256680f52403a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fa61728fe21a8cb0ce381",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cde185139e2e90eba3505",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588ec935139e2e90eab57ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ac0b06e702d09dcaba84a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65600091d7c5b7ad6c790cd8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560a8563b3a73509b0e5c18",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566a875b371188f1409f267",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dd1b807454fe5afc15257",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f4ddca54ffb895533d979",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a66d4d38d54fed6ef35d99",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3b827572f93ea4c7607d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f0195d7c5b7ad6c75473e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581b1c25139e2e90e94ac62",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9d495139e2e90eb64592",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658958ee5139e2e90eaf36c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f03d5139e2e90e9d48ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657538943a256680f50cd680",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658569af5139e2e90ea4ef5b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658011d85139e2e90e8e6f28",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a025db371188f14222c8f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c37e3a256680f514bc6e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568056cb371188f14143505",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566adaab371188f140a518c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657024e9f0c610ed1b719815",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594ee5b56a21080a267a1e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65693a95b371188f141b5dd7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570462be46926eabf19ec7c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f96cb28fe21a8cb0bfbad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65681b6db371188f14154340",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569432db371188f141bf1d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e7a1f8c30579147628af5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556204a54091050341adf96",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655744fe677fedf2af3dd22f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d4895984959b734af4ea7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65855abd5139e2e90ea49dc5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b5a56984959b734a881de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8c508c30579147635e2e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658922975139e2e90eaced9f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e08d45139e2e90ebe3958",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656708a3b371188f140f8d3b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ea9bc8c305791476517ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656071dd3b3a73509b0d75f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583e6685139e2e90e9cd7b4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655708edfb19a42233c4aa7e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570366cf0c610ed1b72d9b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658298675139e2e90e97c195",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655de1a007454fe5afc1b426",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65771b9e3a256680f5138fa1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4c398c452b4fba5c6dd33",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562fb3eb371188f140358aa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598cd2d56a21080a275b3a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a10876572f93ea4c6edcc1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f8e1728fe21a8cb0babdb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65824fb15139e2e90e956c3a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659caeef9705a8d4ee1f7284",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554cb5dd9b030bfa4607ff8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff891d4c5dae49672f5ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572b6763a256680f507ddee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65643b6ab371188f140562f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c83c3a256680f5150fa4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656aca566e702d09dcabd4f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658c1d815139e2e90eb90500",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d51cd6e702d09dcb36985",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658502565139e2e90ea12354",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659df5646a37ec202053c344",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65718c3b1987e25e258525cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659617e956a21080a26b2096",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ceea95139e2e90ebae5f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b5a4a56a21080a2799d53",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65685051b371188f14182bbc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a298956a21080a2785460",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656da5958c30579147613879",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fe8decab7244e7d78e330",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a33e05139e2e90eb01559",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596246156a21080a26bb753",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65600345d7c5b7ad6c793078",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ad13bf0fe49b1a4585062e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657286d83a256680f506a92d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ef9a7d7c5b7ad6c74f104",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655af16a984959b734a56387",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f7a66d7c5b7ad6c78762b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a3be15139e2e90eb06bb2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a20825572f93ea4c713c39",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582c7345139e2e90e9976d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554c5aad9b030bfa4606863",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a44ef5139e2e90eb1051f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65868ec05139e2e90ea68a3e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582a4755139e2e90e984f72",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a908b673edc5b574c36ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e4b115139e2e90ebfbaad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569b3a4b371188f142143fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c7195984959b734adafd0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65791c9b3a256680f51e4248",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596257756a21080a26bc2fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c16fbcab7244e7d709469",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f538ca54ffb8955340aea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd68c0b62e45246536353",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db426a3ebbd69b0c82602",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684bf0b371188f1417cf1f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656036ef3b3a73509b0a90fd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560c5403b3a73509b0edbba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658152ed5139e2e90e92cd2f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593b7190771f87efefc50c9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658696c75139e2e90ea6d5b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bdf4ccab7244e7d6e1fc3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f887b371188f140e5464",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db449a3ebbd69b0c8282a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566932bb371188f1408ba84",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656598beb371188f140745b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596929856a21080a26fa260",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ebfa207454fe5afc426a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65711ffde46926eabf1b9425",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561840eb371188f14ffa300",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fb39ecab7244e7d7745dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584daba5139e2e90e9fca88",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cdd4a5139e2e90eba2a49",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f24ad0b62e452465257e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569ed1db371188f142204ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555981dfbfbe9529ceadc8f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a491df572f93ea4c773a1b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65681f6fb371188f14155ae1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65693892b371188f141b45d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655887e95c50a1da629db9e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65894d8c5139e2e90eaec90f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655de0bf07454fe5afc1af9e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cde905139e2e90eba38c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569532cb371188f141cfb3e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b06abcfe16fbc4962ca0f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e7887a54ffb8955324af5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656808b8b371188f1414689f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566a5c1b371188f1409cb1f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c53e86e702d09dcafcf48",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657003a0f0c610ed1b706115",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657299263a256680f5075ffa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b283b984959b734a788f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65729ef23a256680f50782c9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f8e86d7c5b7ad6c788fa4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568234bb371188f141574ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576cf7c3a256680f5122a91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a694c3a256680f526f8f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65582b53677fedf2af3f63ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572f61a3a256680f509bf14",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f5c5fd7c5b7ad6c783f07",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581b3bf5139e2e90e94b1a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ad111cab7244e7d6aec66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65800a535139e2e90e8e2169",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fcf74cab7244e7d787a4b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb0fb56a21080a27cfa09",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656831f1b371188f1415eea8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65718ebd1987e25e25854da4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65697b87b371188f141e6e91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65952cb656a21080a2699172",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ef3820b62e4524651bc6e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656704d2b371188f140f5235",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65714bbdea266f4fe6ac671c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657971783a256680f523f354",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65728cbb3a256680f506f883",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554d21ad9b030bfa460a923",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656994cab371188f141fb762",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572d1763a256680f508c5b1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db2d3a3ebbd69b0c811e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ecfe15139e2e90ec280ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655df5ab07454fe5afc1f513",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f4c1b371188f1412ff0b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a13f46572f93ea4c6fdaa7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fc7bb371188f1413933a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65696366b371188f141dce5d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a994b371188f1420fb82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65714a42ea266f4fe6ac5e20",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fa6d7cab7244e7d76a916",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562f306b371188f14034adf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579501f3a256680f5215821",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560551e3b3a73509b0bb3cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a3fbb56a21080a278703e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659badc856a21080a27cbdd5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da27ea3ebbd69b0c77c74",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ba08d56a21080a27bdf3a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65965a8f56a21080a26d06c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658f7b6d5139e2e90ec2f07f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e89498c30579147632f1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596028956a21080a26a5e9b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568076cb371188f1414537d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583fd5e5139e2e90e9e3ba0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fbd6628fe21a8cb0deed8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a64fd938d54fed6ef1eee4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558d25f5c50a1da629e626a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6552fa4d3de2a96680afee9a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683670b371188f1416247f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c9f26984959b734ae8c1e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fa449cab7244e7d7686e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65686627b371188f1419302d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659000585139e2e90ec450f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596690f56a21080a26dcd66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e8f2e5139e2e90ec1aa52",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65816f225139e2e90e9405c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658137d05139e2e90e91bbda",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586f0c15139e2e90ea9088f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e30e95139e2e90ebee56c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656012963b3a73509b092fff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65714488ea266f4fe6ac2109",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65575b33677fedf2af3e108f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a36762572f93ea4c748293",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582c2335139e2e90e996611",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657974d83a256680f5243475",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656db75a8c30579147617e00",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0fbf228fe21a8cb137388",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555c3a5fbfbe9529cebba6d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658545b95139e2e90ea3cf1d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8a178c30579147633ddc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554c120d9b030bfa46052ef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65790f1d3a256680f51d6f89",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c7203a256680f5085890",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c9d83984959b734ae8938",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555722ed9b030bfa461aa1b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65601fb33b3a73509b09d446",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572e61a3a256680f50986c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555d2a85409105034198f30",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658262115139e2e90e9638b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65796d743a256680f523ac4e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc8360a869296a4add1ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ce4bf5139e2e90eba8759",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560abf63b3a73509b0e75cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585233f5139e2e90ea2591e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b86705139e2e90eb524dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573f4d23a256680f50b23af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572de6c3a256680f5094c92",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65839e445139e2e90e9a73e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab3a6cab7244e7d68f4c9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d4dc25139e2e90ebda746",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559c1235c50a1da62a01c34",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ac7105139e2e90eb45e83",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0db0828fe21a8cb120ce3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658241a75139e2e90e951176",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a31cb371188f1420a31d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576832d3a256680f50fd459",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568533db371188f1418614d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e14206a37ec20205532a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702244f0c610ed1b7172eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a6beb371188f1420d602",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d4c1b6a37ec2020531698",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c67d6984959b734ad2397",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8dbc02c13221eb2a0a56a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566a92bb371188f1409fcdd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b8ee75139e2e90eb592d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b58c156a21080a2798b47",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dce4407454fe5afc133a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657968083a256680f52331e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567e943b371188f14123219",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e53eaa54ffb89553117c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656586b0b371188f140725e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ff3a8cab7244e7d792c65",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ad1d1984959b734a4678f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed54d8c30579147669c84",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659698ca56a21080a26fb0d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0f24c28fe21a8cb12fe17",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bcc67cab7244e7d6da584",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65716abde1c4488437d07570",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65552b14d9b030bfa4614d2d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1fdbd572f93ea4c70e07d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8ee6c1af4cdbbce819cb9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3c266572f93ea4c7620e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555848ad9b030bfa462089a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572df243a256680f509521f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a7f1b371188f1420e5db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ef0470b62e45246519679",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f05dcd7c5b7ad6c7585fa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a60201115b1da585981572",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65549bded9b030bfa45fb03b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b1dd5984959b734a6f859",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d8d29a3ebbd69b0c7090b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566c200b371188f140bfd59",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c0bc8984959b734a9902e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585328c5139e2e90ea31148",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658247a65139e2e90e952acf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582a94c5139e2e90e988eae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b7277984959b734a8d9d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db23aa3ebbd69b0c80967",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670427b371188f140f45ba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656946a4b371188f141c3256",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b1faf984959b734a70a6e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d1f655139e2e90ebbd8ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576ceff3a256680f512250c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e136d6a37ec202055292e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566c8f9b371188f140c31b8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af298bfe16fbc49624521f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65879cb45139e2e90ea96687",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579722b3a256680f523fe8d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0f00f28fe21a8cb12dd03",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c2e766e702d09dcaf3a95",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573dfcc3a256680f50acdb6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d52ca6e702d09dcb37388",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f60b028fe21a8cb0a73d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc9140a869296a4addd64",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655aba5b5c50a1da62a2adce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d5b4c984959b734af8ffe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c5e886e702d09dcafe588",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a11587572f93ea4c6f5bd5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c388d984959b734ab153c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65674583b371188f14111619",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6589065b5139e2e90eac68d6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65991ef956a21080a27752ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65707ea5e46926eabf1acf05",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65757edc3a256680f50d5539",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694723b371188f141c4006",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0996828fe21a8cb0f27ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595459256a21080a269e0d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bd1546e702d09dcadb94c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65701526f0c610ed1b70c458",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8ece61af4cdbbce818e81",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65850c8d5139e2e90ea1883f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684543b371188f14173cdd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bdc93a256680f5113973",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd7110b62e45246536b38",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6589361c5139e2e90eadc8cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3b53a572f93ea4c75f956",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d10815139e2e90ebb97f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65975c5256a21080a2707699",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594c0110771f87efe024b4c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658064585139e2e90e8f7202",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8ed321af4cdbbce819258",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65841b1a5139e2e90e9f1793",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c1b49cab7244e7d70c306",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597b78e56a21080a27397c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b8a2b5139e2e90eb55721",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576ce0e3a256680f51219cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f9b5d28fe21a8cb0c31e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577cef73a256680f51588f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586b37e5139e2e90ea8769f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a8b633a256680f52859a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655edec9d7c5b7ad6c743e11",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a10af8572f93ea4c6ef82f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658153a75139e2e90e92d7a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656974c0b371188f141e38b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65839f115139e2e90e9a7ba8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658818e05139e2e90eaa15e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a626a10e54b1e5e0fcc398",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556b36154091050341b4dd2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656450c8b371188f140593a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658061935139e2e90e8f6fd6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c0ea8984959b734a9a31d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695c96b371188f141d7699",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556c32054091050341b71b5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c1981cab7244e7d70b2c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8e6d81af4cdbbce812d19",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe4b90b62e45246543dab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c0a39984959b734a987ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65839a7a5139e2e90e9a575a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656960bcb371188f141da910",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6563093cb371188f14039358",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694b5cb371188f141c853b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b7da7984959b734a8fa63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656997eab371188f141fec64",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed44f8c305791476678cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb2da56a21080a27d21bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8a598c30579147634091",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655579f0d9b030bfa461c75b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9fed20fe49b1a4579ea06",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec45407454fe5afc45e59",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65686325b371188f14191897",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c16bb984959b734a9e588",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65671145b371188f140fe6e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569ae72b371188f142124ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6587c5545139e2e90ea9bb85",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657072e1e46926eabf1aab1e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cdb83ffc32fa81eb2d7b1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a8a7b673edc5b574c1632",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658105385139e2e90e906ca0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dd9b207454fe5afc18e34",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572eb163a256680f5099cc8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596191156a21080a26b31b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed1818c305791476640b8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558ce595c50a1da629e5aa3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d5f196e702d09dcb3e3e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582f0625139e2e90e99d5f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af69c0fe16fbc496270f9e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65913b335139e2e90ec4fd5a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659626c656a21080a26bcdb3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572d0c03a256680f508bfbc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d1d416a37ec202052a729",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65674204b371188f141108d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65697649b371188f141e4316",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583c4a55139e2e90e9bf7eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656970f7b371188f141e2779",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561e932b371188f14018929",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d87f3cab7244e7d740c7f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e43c8a54ffb89553053e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a64c4838d54fed6ef1bacd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584046c5139e2e90e9e9d6a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65655a9fb371188f140696eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3cc5d572f93ea4c763436",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ae9346e702d09dcac92f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566bc95b371188f140bc5bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698795b371188f141ee740",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f679428fe21a8cb0ac924",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65890eb05139e2e90eac9f0a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a7f6f673edc5b574bf2d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a5a928fe21a8cb0fca3f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593ccdc0771f87efefdbb48",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657eb785cab7244e7d757acc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9f5450fe49b1a4579925e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ee3d95139e2e90ec29fd6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658159ac5139e2e90e933a91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657578ca3a256680f50d47cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e9a5f8c30579147645bed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bae0956a21080a27cc31c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c4bfe6e702d09dcafbf09",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655981b35c50a1da629f2ca9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b552156a21080a2795e91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4e3ebe32fc2fd7e76d87a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a3a5f5139e2e90eb05a2e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558ad085c50a1da629e1068",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c6d096e702d09dcb003d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656068b53b3a73509b0d1807",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aacb63a256680f5291ac4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561e35bb371188f140174a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab9b4cab7244e7d697767",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65655582b371188f14068bb2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8d93f2c13221eb2a0813b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af7ff4fe16fbc49628d127",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a10b94572f93ea4c6efea9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3f2d5572f93ea4c7685ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fa75b371188f14136916",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe0980b62e452465405d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65751aee3a256680f50c93c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658f9f915139e2e90ec37a8e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bc153a256680f51126a5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ecd74d7c5b7ad6c7373bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560a1803b3a73509b0e47d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65813b5e5139e2e90e91d4f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db775a3ebbd69b0c85ba2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698abab371188f141f1450",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717f01746d4d9eefbdc853",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657035c4f0c610ed1b72d130",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571899c1987e25e2584f0d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657819ed3a256680f519de34",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bcb82cab7244e7d6d9b1f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656011a23b3a73509b092368",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560970c3b3a73509b0e133f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d24986a37ec202052bc03",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff5a7d4c5dae49672d595",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566eea1b371188f140da491",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569b650b371188f14215109",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d0158ffc32fa81eb423d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ffb315139e2e90e8d5665",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e97bb8c305791476433a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1232e572f93ea4c6f9166",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65616c403b3a73509b100f47",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555a98efbfbe9529ceb3f9e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ebff78c3057914765799b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eb66707454fe5afc38e7e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703168f0c610ed1b727928",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e4a6aa54ffb895530a19a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65547675d9b030bfa45e5b3f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703af2f0c610ed1b734458",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658540205139e2e90ea38b5d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659faa0628fe21a8cb0d1dcb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65673258b371188f1410ba2e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f15aa0b62e45246523402",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65825d5b5139e2e90e9619b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0b04828fe21a8cb1093d4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d60716a37ec2020534a25",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ba2bf5139e2e90eb683b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566b833b371188f140b819d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a45e65139e2e90eb115a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0eeaf28fe21a8cb12cb83",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e91295139e2e90ec1b939",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657137a8ea266f4fe6ab7a44",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594c8700771f87efe02a7ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703c99f0c610ed1b736109",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a9e5b371188f1420ff5d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ab67f90fe49b1a45803534",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567ec89b371188f14126cf8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583896c5139e2e90e9a0c73",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65584cbe5c50a1da629ca8f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566af47b371188f140a816b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6578166a3a256680f519940a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567415fb371188f1411061e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a10aec572f93ea4c6ef7f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657b15cecab7244e7d6bb7e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558ba7a5c50a1da629e31a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c7333a256680f508596e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ecec6d7c5b7ad6c7387f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586dc265139e2e90ea8eba2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ac36e5139e2e90eb459f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659faea228fe21a8cb0d52de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ec3728c30579147659014",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eaae68c30579147651ebc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ca94d9705a8d4ee1f1dd5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577da203a256680f5164865",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65780a923a256680f5188956",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658fddb65139e2e90ec429f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af7728fe16fbc496280fdf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65727d193a256680f505fdfb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b056c6e702d09dcad1c95",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596679756a21080a26db8f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65936db60771f87efef9db5d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c84c6984959b734ae3d68",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567ff55b371188f1413c7a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ab6625c50a1da62a283ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65791a5e3a256680f51e1778",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571b2ef1987e25e25866655",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65644f1bb371188f14058de6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d295b6e702d09dcb0e9af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d2dea6e702d09dcb129de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656805e0b371188f14143c38",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684287b371188f1416fdb1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d15576a37ec2020526dd8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658103885139e2e90e905602",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579cf6a3a256680f525e217",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656701e6b371188f140f1d41",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655cbd0c984959b734aee327",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e6c69a54ffb8955322086",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65642877b371188f140537d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bbfd8cab7244e7d6d2a17",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c0867cab7244e7d6fd898",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65617da4b371188f14ff8151",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b86225139e2e90eb5200b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65622572b371188f1401f256",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657181d9746d4d9eefbdf663",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656de35c8c30579147620013",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f059ed7c5b7ad6c758389",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bbae3cab7244e7d6cee35",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658eaff65139e2e90ec22b60",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594bdd60771f87efe0232d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554835dd9b030bfa45ee000",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a35b6f572f93ea4c746500",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566fc1ab371188f140eb255",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b936b5139e2e90eb5cda7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582aa705139e2e90e989da7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da4cfa3ebbd69b0c78799",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717dbe746d4d9eefbdae9e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b08c1dfe16fbc4962fb43c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657b103dcab7244e7d6bab32",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eb5f307454fe5afc38258",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656065693b3a73509b0cef0c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584401b5139e2e90e9f6c02",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659baeb056a21080a27cd052",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bdb766e702d09dcadccf2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b1e3c22de7069614caf9fd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bc8af9705a8d4ee1d8db0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583886e5139e2e90e9a0990",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e12086a37ec20205512bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a10967572f93ea4c6ee676",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655edbbcd7c5b7ad6c742344",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fc04b371188f14138b9d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f139b371188f1412bed9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684eb0b371188f14180da9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d5b91cab7244e7d738fab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569e60ab371188f1421f4c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd1040b62e45246531de0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683199b371188f1415ea7a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655aba8a5c50a1da62a2af4f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a38acc572f93ea4c753340",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566fdbbb371188f140ed57a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65685d19b371188f1418ecfb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c3b7c6e702d09dcaf7a0c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6563f41cb371188f14048677",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f0cfdd7c5b7ad6c75ff0c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bf0939705a8d4ee1e233f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65699e39b371188f142057f4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65686f30b371188f1419699b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c7e63a256680f5086129",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795eb63a256680f5225c8d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65642b95b371188f14053e71",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655462d33de2a96680b20045",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9fc960fe49b1a4579df98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65743d1e3a256680f50bfad8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657977c23a256680f5246143",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579212b3a256680f51e9a6c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cf8345139e2e90ebb32f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ece838c30579147660339",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582fef35139e2e90e99e5b8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab5a0cab7244e7d692043",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65700ba8f0c610ed1b7083eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e85768c3057914762f9fe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d56946a37ec20205335a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577db6c3a256680f5165d41",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d52f3a256680f515eb0e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a88cd56a21080a278bb80",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e6d7bcab7244e7d74c952",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e3f91a54ffb8955301f9e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65938b630771f87efefb69cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8b6aa2c13221eb29f6665",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569dfb1b371188f1421df6e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657455cc3a256680f50c1aa9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595235056a21080a26933d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566ecb1b371188f140d891a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a72fb3a256680f52760b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655586c3d9b030bfa46217a8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a73613a256680f527652d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aead0cab7244e7d6b4b2b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65890b065139e2e90eac8908",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659758fe56a21080a2706041",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bd0e3cab7244e7d6dcd81",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f538aa54ffb8955340a8e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cdcca5139e2e90eba25f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569ac58b371188f142116ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656069ec3b3a73509b0d2a6b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d86986e702d09dcb53ea4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582a3115139e2e90e984080",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583ff0a5139e2e90e9e56e0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65645b56b371188f1405aa29",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568021ab371188f1413eae7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65743c353a256680f50bf77d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ecab78c3057914765cb6f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ae5c5efe16fbc496223e6a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d2c176e702d09dcb10bbf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ff5c928fe21a8cb0e71b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596269c56a21080a26bccaf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65728c473a256680f506f221",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657288423a256680f506bcf6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a209dc572f93ea4c714a6d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c785f984959b734ade7bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567065ab371188f140f6c29",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657667a93a256680f50e83c0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fbfaa0b62e4524652ce27",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588dc025139e2e90eaaaa64",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fc279cab7244e7d781f6e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657924db3a256680f51edbdf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9307673edc5b574c4597",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659673cd56a21080a26e6823",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b95fd5139e2e90eb5f048",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da31fa3ebbd69b0c77fb7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b574756a21080a2797aba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659dff3a6a37ec2020542f86",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567e697b371188f14120b7a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571a1591987e25e25861a83",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561e6abb371188f1401834c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0022828fe21a8cb0e98eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d30005139e2e90ebcacab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658147915139e2e90e9234c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c26de984959b734aa8475",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65583aff677fedf2af3fbb0c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f5419a54ffb8955341226",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657577b33a256680f50d4260",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655a176f5c50a1da62a1da24",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65697f0eb371188f141e944b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a36247572f93ea4c747587",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ca5bd9705a8d4ee1ef2fb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567e9cfb371188f14123c81",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c0462cab7244e7d6f68cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566fcf8b371188f140ec6b1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657010fff0c610ed1b70a20b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597654a56a21080a270e0dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655476c1d9b030bfa45e5cb8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65796f863a256680f523c8b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ce272ffc32fa81eb2ed84",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e5185a54ffb89553100a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9f40673edc5b574c911e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f1db2d7c5b7ad6c76f420",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f5b840b62e4524652b513",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a88f94678d000ab21c502a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556050554091050341a92f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65693ec1b371188f141b9a1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656960a8b371188f141da7f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65558341d9b030bfa4620028",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657688793a256680f5100a02",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65824de15139e2e90e955de6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e4539a54ffb8955306144",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65581738677fedf2af3f18ba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659424770771f87efeffd31c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571738f746d4d9eefbd315c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c153b984959b734a9d6fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567315eb371188f1410b5c3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0b44c28fe21a8cb10c674",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65713af2ea266f4fe6aba18a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562d3ecb371188f1402ed34",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d27f3a256680f515c1fa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579810f3a256680f524f6eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a4f528fe21a8cb0fbb3f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583eade5139e2e90e9cfcba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656aa629673edc5b574cc108",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f988f28fe21a8cb0c0ff4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e9cbb8c305791476483bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554a116d9b030bfa45fc679",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554d8a8d9b030bfa460cac5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d3606cab7244e7d72faf3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fc23ecab7244e7d781c5f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655df52207454fe5afc1f357",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582645e5139e2e90e9647f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65783b9d3a256680f51c0881",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598c69956a21080a27583b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580027d5139e2e90e8dc6e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff583d4c5dae49672d35e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f1955d7c5b7ad6c76befd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562d81ab371188f1402fa2c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657288803a256680f506bf82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598ea9956a21080a2763727",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ffe845139e2e90e8d8dd8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657824493a256680f51adb18",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65605c4c3b3a73509b0c2535",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65546be73de2a96680b22765",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e62e6a54ffb895531cb82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d33256e702d09dcb17841",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657970aa3a256680f523e26e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598e52a56a21080a276226d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d8953a3ebbd69b0c6f458",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656717d7b371188f14101723",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702c44f0c610ed1b720ff7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eca4c667cec84fcd4196d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566af41b371188f140a80c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659506b856a21080a26803e0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555abccfbfbe9529ceb4731",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e2a905139e2e90ebeadb2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656adf356e702d09dcac4fb4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65600eff3b3a73509b09056f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576ac5d3a256680f510a06e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65780b8d3a256680f5189c66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a86214678d000ab21b15da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585257d5139e2e90ea274d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f69a528fe21a8cb0ae266",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655acfb5984959b734a454b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561eb28b371188f14019272",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f7224d7c5b7ad6c786b80",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a88c95139e2e90eb32842",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bc849cab7244e7d6d75b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bd3169705a8d4ee1dd818",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8da9f2c13221eb2a094fd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc75b0a869296a4adc68c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6599164556a21080a27723db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656063863b3a73509b0cce2d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586f2b75139e2e90ea90c65",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65548e06d9b030bfa45f47a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c0ecc984959b734a9a3d0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571ecfe1987e25e258728ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a893c5139e2e90eb32cc6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698bd3b371188f141f25b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a11531572f93ea4c6f5a19",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d81d36e702d09dcb4f324",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f5cb328fe21a8cb0a3b71",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65696c3fb371188f141e1511",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f7bcd28fe21a8cb0b4662",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dad04a3ebbd69b0c7ce7b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9fea50fe49b1a4579e980",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571850e1987e25e25849860",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0c5e828fe21a8cb1183d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d64bacab7244e7d73b088",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593c9f40771f87efefd7e29",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577e2093a256680f516ca51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6578837a3a256680f51ceac9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f2199d7c5b7ad6c770fbd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4ec16e32fc2fd7e772e14",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585204a5139e2e90ea23679",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d44996e702d09dcb29d54",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dc7ac8c3057914761b0a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a2af456a21080a27856dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65755d643a256680f50d25a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65685d60b371188f1418f0f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ae5d1984959b734a52d81",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717d4c746d4d9eefbda8d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f1acb371188f1412c4ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65810f4e5139e2e90e90e1d4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657acdaccab7244e7d6ac52b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9b19673edc5b574c7181",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65950b9056a21080a268342f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596636056a21080a26d7cba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658931a55139e2e90ead9270",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ff6ef5139e2e90e8d1786",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656724e2b371188f14107b54",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65644fe0b371188f140590af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596278456a21080a26bd299",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f9905139e2e90ea0bb5a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bf3155139e2e90eb89b32",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ffdeef0c610ed1b704936",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554aed3d9b030bfa45fffb3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597751856a21080a271a68b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596289756a21080a26bd924",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e1c556a37ec2020557694",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597de2656a21080a274750c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583fa205139e2e90e9e011b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fa6ab371188f14136870",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580f2945139e2e90e8fb731",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581b59c5139e2e90e94ba25",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656060d63b3a73509b0ca099",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65616bf93b3a73509b100d45",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657124bee46926eabf1bbd80",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566aa7bb371188f140a1023",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a7077673edc5b574bd73e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c81526e702d09dcb029fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583b4165139e2e90e9b95ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569e2e4b371188f1421ed72",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f4eb5139e2e90ea078f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e949e8c3057914763f62c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d1e73a256680f515b7f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65713fb2ea266f4fe6abdf04",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab7c7cab7244e7d6951e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0e99e28fe21a8cb127df1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658131015139e2e90e919221",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f31f00b62e452465283c0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573d71e3a256680f50aae88",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65574d3e677fedf2af3de6df",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f8bf428fe21a8cb0b9c1b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d9887cab7244e7d742004",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a78433a256680f527b12f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65743b903a256680f50bf601",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec59607454fe5afc46f62",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6589349e5139e2e90eadb6f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b1316984959b734a64290",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ad076cab7244e7d6adfbe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712863e46926eabf1bee6a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657821b63a256680f51aa688",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f2919d7c5b7ad6c775232",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d2f2a6e702d09dcb13885",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594d2490771f87efe03414e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698ea6b371188f141f5144",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb1a756a21080a27d0811",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bc1c156a21080a27e2524",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a61728fe21a8cb0fd2de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579943e3a256680f5256007",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a7d55673edc5b574bea2f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65766c0d3a256680f50ea84c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657280da3a256680f5063bfe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65728aec3a256680f506de21",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65950f2c56a21080a2685959",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656553c2b371188f1406867a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da3c1a3ebbd69b0c78167",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795ba43a256680f5221c8f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0a73428fe21a8cb0fea18",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8a5a8c305791476340b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703473f0c610ed1b72b635",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed4168c305791476672b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe55b0b62e45246544350",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a09a3428fe21a8cb0f2f81",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c514dcab7244e7d717efe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569448cb371188f141c0905",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65699ce8b371188f14203ed6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566b557b371188f140b3b20",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ba9a3cab7244e7d6c3c6a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65965f1056a21080a26d3e61",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554f631d9b030bfa461355f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65728d7d3a256680f506ffdf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6587dd855139e2e90ea9dafb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65792cb43a256680f51f67d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555d23d540910503419868a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566ddf6b371188f140cac48",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65815ac75139e2e90e934863",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ef3fdd7c5b7ad6c74ba58",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e92b98c3057914763d1ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656815c4b371188f14151748",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d56facab7244e7d737fb3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e3b035139e2e90ebf3f02",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65640d5fb371188f1404dc05",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fa7a328fe21a8cb0cfb69",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558917d5c50a1da629dd43e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d31ab6e702d09dcb162a1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65631669b371188f1403adff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b024e984959b734a5b9b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655847035c50a1da629c9124",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656da4fb8c305791476134b4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aaaae20fe49b1a457e83af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a6e8c3a256680f52732f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65574e07677fedf2af3de9a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d3e026e702d09dcb230ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658101d45139e2e90e904385",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659380e10771f87efefaea19",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65643e90b371188f140568ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65782d4a3a256680f51ba18c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556409954091050341b239f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c1923984959b734a9f7c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555cf6bfbfbe9529cec1a93",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65571a316ebe5554319e502a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659381ea0771f87efefaf3a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ecf9fd7c5b7ad6c73942e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fab0628fe21a8cb0d2900",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65584e905c50a1da629caea2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65585a3f5c50a1da629ceb22",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65576de9677fedf2af3e4f28",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656593a0b371188f14073b08",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656702efb371188f140f300c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0fc6728fe21a8cb137906",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a10fd9572f93ea4c6f2898",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657966b03a256680f5231b4e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698d9bb371188f141f4367",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da5dba3ebbd69b0c78f1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ede1b8c30579147675369",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65575d6e677fedf2af3e16bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e90278c30579147639e25",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65975a6056a21080a27068f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d71886a37ec20205361cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554c849d9b030bfa46072b8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f66b528fe21a8cb0abf72",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c7238984959b734adb493",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566e03eb371188f140cca78",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb9ff56a21080a27da76c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fea9bd4c5dae496723e13",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f4e01d7c5b7ad6c781341",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595171c56a21080a268afeb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655acf3d984959b734a44e63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a6446538d54fed6ef14086",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659dff0b6a37ec2020542d3c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e28256a37ec202055a811",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e93668c3057914763de9d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65653cddb371188f14066028",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ef4ea0b62e4524651cc3a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65600481d7c5b7ad6c79387d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555b017fbfbe9529ceb5aad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568c373b371188f141a80eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584f50c5139e2e90ea07b36",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555edd554091050341a59da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65964a0256a21080a26c835d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583e8235139e2e90e9ce5ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8b218c30579147634e45",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65730d703a256680f509e018",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586e41e5139e2e90ea8fa78",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571a6a31987e25e25863793",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c1535cab7244e7d707eb8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a7d893a256680f527f349",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f633128fe21a8cb0a963b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569cac3b371188f14219fcc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577ee093a256680f5173703",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f7a4b371188f140e4031",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597718f56a21080a27176d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559e18c5c50a1da62a08cb5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ab47770fe49b1a457fa56f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4aa42c452b4fba5c63a77",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bc1c956a21080a27e25df",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dae038c30579147615648",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573d92e3a256680f50ab50a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c1f226e702d09dcaef415",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657980b43a256680f524f274",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f4690a54ffb8955339784",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583c8da5139e2e90e9c0532",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd6df0b62e45246536803",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657191b71987e25e25856e9c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bb36ccab7244e7d6c9166",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598ba9056a21080a275422b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bd5e4cab7244e7d6df669",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576812f3a256680f50fbaf2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a72883a256680f5275ae1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655af859984959b734a58ac5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566d2fdb371188f140c5ff1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ab7fda0fe49b1a4580d4f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657907c73a256680f51d34fd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d50fe6e702d09dcb36269",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bfe386e702d09dcae83bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65602bbb3b3a73509b0a59a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683e10b371188f1416a3db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658932dc5139e2e90eada33d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576b86c3a256680f510fe9c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e5822a54ffb89553146de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576678f3a256680f50e82c8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a10dd8572f93ea4c6f1443",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658fae8c5139e2e90ec3a37d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582e5d85139e2e90e99bebc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f2a960b62e45246526c34",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f35b7d7c5b7ad6c77a619",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577be3d3a256680f5147196",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703110f0c610ed1b7270ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555dfb5540910503419f785",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ab28a50fe49b1a457ed0ce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656daed18c305791476159e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559914d5c50a1da629f7eff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f61dbd7c5b7ad6c784c91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658161f25139e2e90e939e15",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580f9a15139e2e90e8fe91d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c44d8984959b734ab56f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658247aa5139e2e90e952af6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a73dbf38d54fed6ef53f7d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a99085139e2e90eb3d096",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c1feb6e702d09dcaef7d0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584fd605139e2e90ea0f629",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fa5c928fe21a8cb0cdd47",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed3438c30579147665e1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593cdf90771f87efefdd542",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a6429438d54fed6ef120e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d32eb6e702d09dcb17504",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566aecbb371188f140a727e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a1a1c56a21080a278372a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a33065139e2e90eb00b2f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65780d883a256680f518bdaa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656af87b6e702d09dcacebcb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656149bb3b3a73509b0f2fc8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e8317cab7244e7d7501b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b913a5139e2e90eb5afa1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e98b28c30579147644378",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597a2ed56a21080a272e4b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712effea266f4fe6aaf38c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fc0e6cab7244e7d780a10",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656031dd3b3a73509b0a7782",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65657d0bb371188f14070297",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dc5888c3057914761a956",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657965dd3a256680f523086a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598f47e56a21080a2765f5f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582638b5139e2e90e9643a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580055c5139e2e90e8def5b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cef1cffc32fa81eb33994",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65812d295139e2e90e917bf8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a622500e54b1e5e0fc9cd8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65978a5156a21080a27292d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9cd95139e2e90eb63f49",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d6d266e702d09dcb44bec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659606e056a21080a26a773b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581484a5139e2e90e923e37",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588ed1f5139e2e90eab5ed1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571970a1987e25e2585bc92",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ff9555139e2e90e8d3852",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576dd943a256680f512bb40",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597ac1856a21080a2732513",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b73d2984959b734a8ddfc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596642156a21080a26d87a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658447af5139e2e90e9f84e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0d17428fe21a8cb11d267",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a60669115b1da5859845bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b556056a21080a27961b8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e0fe26a37ec202054f2a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d44d76e702d09dcb29fa6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ae7e70fe16fbc49622b950",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a3ec85139e2e90eb08ac1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f521b371188f140e0d05",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0944628fe21a8cb0f0397",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584ed675139e2e90ea02ea2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656154d93b3a73509b0f6c30",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65732a0a3a256680f50a0d8f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b123c6e702d09dcad31c9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8d218c30579147636aea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65810c205139e2e90e90ba29",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4e16ce32fc2fd7e76b96d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65656c8eb371188f1406d5f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658104075139e2e90e905f80",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65681691b371188f14151cdf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65601b7f3b3a73509b099a52",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566bffcb371188f140be9fd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65685aafb371188f1418d113",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b207b6e702d09dcad4318",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d2a825139e2e90ebc65e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a891682c13221eb29d9489",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e627ea54ffb895531c5df",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65704914e46926eabf19ff76",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c8213a256680f5150cc3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8abb8c3057914763466a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c3efe6e702d09dcaf9032",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe6920b62e452465450bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655cde31984959b734af30f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e319d6a37ec202055c998",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ecfa28c30579147661a15",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657692243a256680f5103e4a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65854cb65139e2e90ea41fce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65975e0d56a21080a2708753",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f3be5d7c5b7ad6c77c521",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656eb9928c30579147655ad2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b381b984959b734a7fd63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb07a56a21080a27cee12",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65741a743a256680f50b88af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566fce8b371188f140ec575",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b13c0984959b734a6513a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658192295139e2e90e947d50",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584020f5139e2e90e9e83e0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d4c73cab7244e7d734b8e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bdd40cab7244e7d6e19a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684b3eb371188f1417bc72",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559cf145c50a1da62a05ee6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1040728fe21a8cb13db46",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d33045139e2e90ebcd74b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658fccf25139e2e90ec3f55f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d7e456e702d09dcb4bc2c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e90868c3057914763a30b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568463bb371188f14175385",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594f62d56a21080a267bb16",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c1fd3a256680f50824bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65780ac93a256680f5188d2e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65604bf43b3a73509b0b2f0d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684624b371188f14175196",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656af62d6e702d09dcacdc73",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561efeab371188f14019f7e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ee16f8c30579147678614",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b795d56a21080a27b31eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a5e676115b1da58596c009",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656af12d6e702d09dcacbf8c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cbf099705a8d4ee2064dc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f2101d7c5b7ad6c770ad6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659022235139e2e90ec4691f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588d5615139e2e90eaa7ccd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560bb3b3b3a73509b0ebf68",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f542b371188f140e0f1e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d339b6a37ec202052e194",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d7373a256680f5160e29",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eb43307454fe5afc36177",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65555fcbd9b030bfa4616904",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c79be6e702d09dcb01ad0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f598f28fe21a8cb0a1768",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d35c06e702d09dcb19e79",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a5e968115b1da58596d6db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717303746d4d9eefbd2c01",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658540f45139e2e90ea396d4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657801063a256680f517ec47",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560a07d3b3a73509b0e41cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3b7bc572f93ea4c760646",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cfa5affc32fa81eb3c298",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583aabf5139e2e90e9b15f4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a8bb35139e2e90eb34a39",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655855b25c50a1da629ccee6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d9c61a3ebbd69b0c7561b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b36e5b0b404a49855c1a4a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658294ba5139e2e90e979400",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65af3876fe16fbc49625614f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a89d312c13221eb29e79c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d9a538c3057914760c632",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e4fb1a54ffb895530eada",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566b7d2b371188f140b7a35",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bb6925139e2e90eb6d6ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c38de6e702d09dcaf6ef1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658503225139e2e90ea12d43",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569af1ab371188f14212a07",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bb3d6cab7244e7d6c96e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a14bdb572f93ea4c6ff395",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561a900b371188f140087f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657660cd3a256680f50e48ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657186861987e25e2584b2b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65797a2b3a256680f5249072",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e90888c3057914763a34d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657173ea746d4d9eefbd341d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a403e5139e2e90eb0a468",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568067db371188f14144624",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c81a8984959b734ae2520",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657664293a256680f50e643b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a12aab572f93ea4c6faa05",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656808f8b371188f14146ecf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698d8cb371188f141f4275",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658c29a45139e2e90eb91ff7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65696009b371188f141da200",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655427903de2a96680b0cd00",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c509f6e702d09dcafc7f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596db5f56a21080a2701d34",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0b0a928fe21a8cb109bff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d90a96e702d09dcb5dfd1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598bc0b56a21080a2754a85",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b993e5139e2e90eb61921",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3b6b6572f93ea4c760216",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555c8fefbfbe9529cebe37f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a782a038d54fed6ef7c82a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb83156a21080a27d85c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65613ebc3b3a73509b0f1d35",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65796d2d3a256680f523a71f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657975c03a256680f5244159",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b5b2556a21080a279ab77",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ba38856a21080a27c028a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657034c3f0c610ed1b72bdc0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fcb5bcab7244e7d785e7f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d8e0d6e702d09dcb5b548",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583ea2f5139e2e90e9cf5fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65718a121987e25e2584fb9f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655377e03de2a96680b05d0b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597a31656a21080a272e587",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655631f954091050341b10f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d80256e702d09dcb4d954",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8eaab1af4cdbbce816842",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65729cd43a256680f5077955",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c0523cab7244e7d6f7fef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559cde45c50a1da62a059ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655861a05c50a1da629d1a87",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596258356a21080a26bc3ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569dcc4b371188f1421d6b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a6f2f3a256680f5273a93",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b0785afe16fbc4962deaa6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659caac99705a8d4ee1f32ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658116ac5139e2e90e911d94",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c0b23a256680f5116234",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657698dd3a256680f5105a41",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65770c0a3a256680f51362d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65791cb63a256680f51e440a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ee5388c3057914767bf76",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656026863b3a73509b0a2769",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657122b8e46926eabf1baaee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65606cbd3b3a73509b0d49f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3645d572f93ea4c747a07",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65617668b371188f14ff60af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d972f8c3057914760a0c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d5ec7984959b734afaa5e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4af87c452b4fba5c67761",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658be4655139e2e90eb80e1f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598f26a56a21080a27651ef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65727ee63a256680f5061757",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fa1a328fe21a8cb0c82a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65798e903a256680f5254e4f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65767a7a3a256680f50f6da1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558c5765c50a1da629e49fa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65824b965139e2e90e954710",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb07a56a21080a27cee1b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6590294e5139e2e90ec474f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e82f38c3057914762db9a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d4624cab7244e7d7339a9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dc9718c3057914761b6cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e460aa54ffb8955306cfb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568515bb371188f14184309",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558723d5c50a1da629d548a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65641fdcb371188f1405288f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683a8db371188f14166abc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ebede8c305791476573c0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c3485984959b734aaf7f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579656b3a256680f522ffc7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684a8eb371188f1417a8e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ee1598c305791476784ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656be7ff6e702d09dcae02cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec89507454fe5afc49855",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d8c466e702d09dcb59711",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655df70d07454fe5afc1f8b4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6586ab6b5139e2e90ea8022a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656017533b3a73509b096429",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fc384cab7244e7d782947",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d34c06e702d09dcb19195",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65686f0fb371188f141968d0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a213cb572f93ea4c71a359",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558cd8e5c50a1da629e57ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65559dacfbfbe9529ceafc97",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594d0a70771f87efe032773",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65995d7656a21080a277d520",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a598156a21080a27894e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d443c6e702d09dcb295ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dcdba07454fe5afc12f6e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e27996a37ec202055a578",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65940c240771f87efeff96e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65616c0b3b3a73509b100dc2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cf46e5139e2e90ebb183f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659baf4c56a21080a27cd890",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562a8b7b371188f14023c36",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ab3155139e2e90eb4379f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aaa2d3a256680f5290176",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656209e0b371188f1401dd13",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b95b256a21080a27b9d23",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d55facab7244e7d737943",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65716f57746d4d9eefbd05b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656016833b3a73509b095c97",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559956d5c50a1da629f8d4c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cfbd7ffc32fa81eb3d026",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d6a58984959b734b01be5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717510746d4d9eefbd3e77",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659becaa9705a8d4ee1e1704",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655e075407454fe5afc2252f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581665d5139e2e90e93cf3a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571c9561987e25e2586bd0e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658248635139e2e90e952f73",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d38ad6e702d09dcb1d0cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb13a56a21080a27cff08",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656997abb371188f141fe734",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683e2cb371188f1416a6d6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d3c736e702d09dcb21816",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec57607454fe5afc46dba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b36aca0b404a49855be211",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bd5b15139e2e90eb781a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a7969f678d000ab2190da7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581433a5139e2e90e920610",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d380c6a37ec202052ea92",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712627e46926eabf1bce85",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577339b3a256680f513b677",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65616d95b371188f14ff19b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f16fb371188f140dc999",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a9ed550fe49b1a45793d82",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659522c856a21080a2692e3d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e4c4ca54ffb895530be55",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658104ae5139e2e90e906753",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657679533a256680f50f5e45",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554f044d9b030bfa4612131",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562f6f8b371188f14034f56",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65707a4ae46926eabf1ac303",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580fd585139e2e90e9012f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656546a8b371188f14067186",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580fb0b5139e2e90e8ffb4b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655de07907454fe5afc1ade7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588cea15139e2e90eaa67e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da8bfa3ebbd69b0c7a3ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571a6091987e25e2586337a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65694db8b371188f141ca9c3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598fbb656a21080a2767a7d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562c3efb371188f1402bbd1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cd2a7ffc32fa81eb2bf2a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698da8b371188f141f4404",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b36bf20b404a49855bf2ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ef85fd7c5b7ad6c74e610",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65646ea8b371188f1405ec9b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65692f7eb371188f141afff7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db1b2a3ebbd69b0c800fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9e0d5139e2e90eb64f20",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65672d83b371188f1410a8d4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581a2475139e2e90e9496ff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fc6d7cab7244e7d7841e0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ebc2307454fe5afc3eec1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588e3205139e2e90eaaed95",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581b2c55139e2e90e94add7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db07fa3ebbd69b0c7f4bb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e98e68c30579147644673",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597db3a56a21080a2746f1e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593c4a70771f87efefd0ac2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65699176b371188f141f7f29",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c3803a256680f5083458",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ace7c6e702d09dcabec88",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f72c5139e2e90e9dbd94",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658590dc5139e2e90ea53f72",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655705cbfb19a42233c49a1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a48eb371188f1420bc02",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6578283a3a256680f51b377d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bf3b6cab7244e7d6e6a9b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655489bbd9b030bfa45f244f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bbdfa5139e2e90eb6e952",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed96a8c305791476700d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a112ab572f93ea4c6f4119",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b657a56a21080a27a4137",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65814e7b5139e2e90e928c14",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65960d2d56a21080a26a9f03",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65600c8e3b3a73509b08e3d0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583ef435139e2e90e9d3a77",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8dbc72c13221eb2a0a61a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558c8c65c50a1da629e5361",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db47ea3ebbd69b0c82b12",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a6b185139e2e90eb20616",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659764db56a21080a270d970",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b4c07984959b734a84e86",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4c04dc452b4fba5c6c928",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670646b371188f140f6b08",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f8895139e2e90e9ddd64",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65669d6cb371188f14094555",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db12da3ebbd69b0c7fb01",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65714579ea266f4fe6ac2df7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c27fdcab7244e7d711127",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c70efcab7244e7d71af2b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65711585e46926eabf1b5867",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0aa9128fe21a8cb102eca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d6dfecab7244e7d73d3b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d7b986e702d09dcb4a5a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fe81d0b62e45246546444",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c6b0dcab7244e7d71a667",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fedded4c5dae4967269e6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d0c02ffc32fa81eb4b6bf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579625d3a256680f522b57b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e7fcfcab7244e7d74f779",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9b07673edc5b574c706c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593b1c90771f87efefc1505",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ca7149705a8d4ee1f046a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594cd9d0771f87efe02fc2e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a6474238d54fed6ef17156",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655955aa5c50a1da629ea6e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cd51bffc32fa81eb2c73d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583b27b5139e2e90e9b8639",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583df5a5139e2e90e9c9332",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65727ea63a256680f50613b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655aecb4984959b734a5505f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fc74d28fe21a8cb0e1e51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554fa8dd9b030bfa4613abf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656198f0b371188f140008e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656413afb371188f14050620",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566e0e3b371188f140cd6cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bc09a5139e2e90eb6f59f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65659a14b371188f14074a8b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da7e1a3ebbd69b0c79dc5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a3ca356a21080a2786d44",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e181d6a37ec2020555b68",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a44255139e2e90eb0f142",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657806ab3a256680f5183e70",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659670cc56a21080a26e40e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569f341b371188f14221592",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa81520fe49b1a457e429c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e93bc8c3057914763e41b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657983e33a256680f5251212",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702526f0c610ed1b719a8f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655363043de2a96680b04d26",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a6db03a256680f52726e4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cbca89705a8d4ee2048be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a00e1a28fe21a8cb0eb47d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d59356e702d09dcb3bc04",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fa0c2cab7244e7d766565",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65642b1fb371188f14053d90",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670136b371188f140f13ba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656063043b3a73509b0cc620",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658459095139e2e90e9fa677",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582a45c5139e2e90e984e51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657eb658cab7244e7d757745",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f2bd80b62e4524652710f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ca0df9705a8d4ee1ec894",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f964b371188f140e6547",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572e0f73a256680f50961c8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576bf0c3a256680f511497f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e61fea54ffb895531be36",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65796be43a256680f5238caf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65797a813a256680f5249816",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ecb10a54ffb8955333e49",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d33146e702d09dcb17766",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585274b5139e2e90ea28c1c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d4ac65139e2e90ebd9cd8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571dc8f1987e25e25870908",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65780dcb3a256680f518c0b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580f2a75139e2e90e8fb79b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dcfec8c3057914761cd55",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657961963a256680f522a5ed",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e4a8aa54ffb895530a385",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65854f3e5139e2e90ea43b73",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ae5ae0fe16fbc4962236bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a49c856a21080a2787966",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a70bd5139e2e90eb224c8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659234845139e2e90ec56d09",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712ee3ea266f4fe6aaf21a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cc9c89705a8d4ee20e384",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0dd0828fe21a8cb1219c9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961b7656a21080a26b4d66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0c65428fe21a8cb118763",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a518f2115b1da585957f51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd5dc0b62e45246535713",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655974af5c50a1da629eedcd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659baffd56a21080a27ce322",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65686fa4b371188f14196b90",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561622d3b3a73509b0fc80f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65605ccc3b3a73509b0c3618",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684af6b371188f1417b52e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a788b371188f1420df43",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cdf405139e2e90eba3ffd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961c2656a21080a26b567c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a7de05139e2e90eb277ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e8a4e5139e2e90ec161a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4b85ec452b4fba5c6adfa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65671326b371188f140ff184",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cb78f9705a8d4ee1ff8dd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698e28b371188f141f4bc5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0c50728fe21a8cb117993",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656158963b3a73509b0f7f53",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a63c6338d54fed6ef0cd23",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b818d56a21080a27b5ad0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e6945cab7244e7d74c108",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556240c54091050341aebcc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f449b371188f1412f780",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e07b76a37ec202054889d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8db2e2c13221eb2a09caf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d0884ffc32fa81eb48a8e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a244d1572f93ea4c727f1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e1c4a6a37ec2020557636",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569a3f8b371188f1420b1a1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555d9f3540910503419d104",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565e013b371188f1407f54e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554e84ad9b030bfa4610849",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65711f8ae46926eabf1b8f88",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658f61bb5139e2e90ec2b64d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65839bd35139e2e90e9a5ede",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cbf9f9705a8d4ee206c4b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c8993a256680f5086a49",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568572db371188f1418a3eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e6eabcab7244e7d74cd67",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d484f6e702d09dcb2d3fb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583dad95139e2e90e9c5b9b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597909e56a21080a272a190",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680629b371188f1414412d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558a3ef5c50a1da629dfade",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555bd4cfbfbe9529ceb8e89",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655469803de2a96680b22309",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8ec801af4cdbbce818717",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658196745139e2e90e9486f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e0d296a37ec202054ccd2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a8b11673edc5b574c18b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583dbaa5139e2e90e9c616c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577cd593a256680f5156fd0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ecbd5d7c5b7ad6c735840",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659686a356a21080a26f7271",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b45b0984959b734a839af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659746b556a21080a2702cb4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65682b47b371188f1415b1b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c173d984959b734a9e92b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572cf463a256680f508b216",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8e42d2c13221eb2a14054",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656abf186e702d09dcaba1f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657cf3dacab7244e7d720be1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656aa4b1673edc5b574cb54e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cf8f1ffc32fa81eb3b268",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698a5cb371188f141f0fba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657876a83a256680f51ccbd1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573cf283a256680f50a8f2e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571dcd31987e25e25870979",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572b7fc3a256680f507e4a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657169d0e1c4488437d06ef4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a8e5f673edc5b574c2b9d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8d2622c13221eb2a01961",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fcd2c28fe21a8cb0e2cd8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555a3a4fbfbe9529ceb263d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f041ed7c5b7ad6c756ed5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580135d5139e2e90e8e7c1a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658532535139e2e90ea30fc1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584ff905139e2e90ea10bcf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566eee3b371188f140da7f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ca2c6984959b734ae926e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594c41a0771f87efe0276c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656965b3b371188f141de59e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a558e56a21080a2788dbf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595171156a21080a268af65",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d48c6cab7244e7d733e56",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657972a93a256680f524072e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561b26db371188f1400c18c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ac82ea0fe49b1a4582a58f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c2469cab7244e7d70fbb3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554b1c5d9b030bfa4601445",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bbee1cab7244e7d6d1fff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fb13e28fe21a8cb0d786f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fba23cab7244e7d77a47c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596387a56a21080a26c4b8e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567d9e6b371188f1411bae8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d28b26e702d09dcb0e231",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e8231cab7244e7d74fe38",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657470183a256680f50c4077",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65683182b371188f1415e976",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658008a95139e2e90e8e1406",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656170fab371188f14ff3553",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581168b5139e2e90e911c85",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f123bd7c5b7ad6c765694",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658403815139e2e90e9e93ad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bc3725139e2e90eb70063",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65602ca43b3a73509b0a60ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9c5d5139e2e90eb638ef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577ebe53a256680f51723f9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562ddc7b371188f14030582",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657aaa1f3a256680f52900da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657458293a256680f50c1ded",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581b0fd5139e2e90e94ab51",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582add05139e2e90e98c608",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c1eb5cab7244e7d70de5a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657831593a256680f51bcfe5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658113165139e2e90e91002c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ad242984959b734a46a1e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566c36cb371188f140c0a1b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b97e25139e2e90eb6096e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a200d5572f93ea4c70f9a0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e84105139e2e90ec11fba",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585334c5139e2e90ea314c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655acc20984959b734a42e11",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569ab50b371188f14210f58",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583cb0b5139e2e90e9c0dcb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556cf3854091050341bb452",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65719d881987e25e2586016e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f97b428fe21a8cb0c056d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656721d8b371188f14106b98",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e85918c3057914762fcbf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c2192cab7244e7d70ef4b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b1fe0984959b734a70c1e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658587255139e2e90ea5324d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65615e2a3b3a73509b0fa7f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655828b4677fedf2af3f5ab0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596658956a21080a26d9d89",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657903ab3a256680f51d2320",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d32136e702d09dcb169cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597dcde56a21080a274731a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567e564b371188f1411fe9c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570242df0c610ed1b718c75",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657db3f6cab7244e7d745a60",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555c750fbfbe9529cebd673",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65938ad60771f87efefb642f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65742c713a256680f50bc6eb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656058353b3a73509b0bd296",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8ec591af4cdbbce81845a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c3d03a256680f508377d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656edf108c30579147676301",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6563187fb371188f1403b192",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657689ee3a256680f51016c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed9c08c30579147670618",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a12225572f93ea4c6f8ed9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595679756a21080a26a1771",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565965fb371188f140741a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659622e956a21080a26baa90",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fc870cab7244e7d784a17",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b8a8c5139e2e90eb55c0a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658937f25139e2e90eade1ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c1b4bcab7244e7d70c330",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f852028fe21a8cb0b81e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fa22b371188f1413621b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598f42856a21080a2765d78",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65700576f0c610ed1b706679",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65813dd45139e2e90e91e30b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c1194984959b734a9bc87",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596176756a21080a26b1a31",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f3c12d7c5b7ad6c77c671",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65561c0e54091050341ad0cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593bb6e0771f87efefc8116",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a1ed5e572f93ea4c70819b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a50485115b1da5859515c1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d07d4ffc32fa81eb47e2f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ac6d9984959b734a3d75a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594c5fe0771f87efe028407",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712759e46926eabf1be1c2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659564df56a21080a26a1452",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9eb2673edc5b574c8c81",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65893c115139e2e90eae0c9c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658edf8a5139e2e90ec29bad",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657287e13a256680f506b7fc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d19875139e2e90ebbb908",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65aa0a210fe49b1a457a0c73",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fde1d0b62e4524653dff1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596365256a21080a26c3f77",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ff73fd4c5dae49672ea9d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658aa6f65139e2e90eb417e6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712f4aea266f4fe6aaf982",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567e66db371188f14120946",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656074843b3a73509b0d8f92",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656066823b3a73509b0cfb0c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593c8800771f87efefd56e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65642c45b371188f140540e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dac68a3ebbd69b0c7c87a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593ca830771f87efefd8b9e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561f25bb371188f1401a548",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658003105139e2e90e8dcfce",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bb98856a21080a27d9ea9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658511375139e2e90ea1a78f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a89785139e2e90eb32fe9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656efdb80b62e4524652025f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a398a5572f93ea4c7571b8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ba0cf56a21080a27be149",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ccba8984959b734af1755",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b2e826e702d09dcad5ca2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656073853b3a73509b0d8a52",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65977cba56a21080a27208be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bc0ebcab7244e7d6d33da",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659387de0771f87efefb3f0d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bd89f5139e2e90eb7a372",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c7368984959b734adbd80",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fc2cf28fe21a8cb0e0d03",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f174b371188f140dc9b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562b007b371188f14025d00",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656cc5166e702d09dcb08118",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65890d5b5139e2e90eac9530",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f51e9a54ffb895533f96c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65561b2154091050341ace28",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594db370771f87efe03a53a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f590b371188f14130c5e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a48955139e2e90eb13b11",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571a6b91987e25e258637ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65558f8ad9b030bfa46252d5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65602cd33b3a73509b0a61bd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555daf3540910503419dca6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658012e75139e2e90e8e77d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e88ec8c305791476327f0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658161785139e2e90e93983f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582be315139e2e90e99509a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65815fbe5139e2e90e938586",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b86e95139e2e90eb52bec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0ab7328fe21a8cb103ec5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65850c765139e2e90ea18719",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712d07ea266f4fe6aad2e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65707880e46926eabf1abf78",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717ba9746d4d9eefbd936f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d31666e702d09dcb15e13",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595210a56a21080a2691790",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ec93b5139e2e90ec26d07",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c93e3a256680f511e5ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65602fa93b3a73509b0a6eb9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b91375139e2e90eb5af4e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576d1ff3a256680f5124f2a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656942a3b371188f141be776",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a113a4572f93ea4c6f4ad7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655da555a3ebbd69b0c78b79",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555dd27540910503419eadc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597c42156a21080a2740066",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559831c5c50a1da629f323e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d5d146a37ec20205342cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fc5c4cab7244e7d783a27",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961f4656a21080a26b810b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c573c6e702d09dcafd86b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577f1c13a256680f5175c37",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65781a683a256680f519ed07",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d309f6e702d09dcb14ed4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65702f9ff0c610ed1b7255d1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cae4d9705a8d4ee1f68d0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6579373c3a256680f5200970",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db594a3ebbd69b0c83ce9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ee2d68c30579147679e56",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a09f6228fe21a8cb0f6468",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569550ab371188f141d18ae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655edc2fd7c5b7ad6c7427a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577d30e3a256680f515c955",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e35755139e2e90ebf0689",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f6c9428fe21a8cb0af839",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554a224d9b030bfa45fc9e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561f3cab371188f1401aa29",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e79bb8c305791476288b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd9570b62e45246539138",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cb3109705a8d4ee1fad69",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cdee35139e2e90eba3c2c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65797d0c3a256680f524bb06",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656152f13b3a73509b0f60d0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65574f74677fedf2af3ded36",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d2aaf5139e2e90ebc68d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9a2a673edc5b574c6add",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555df09540910503419f382",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659ea5e6a54ffb89553308a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65864ef75139e2e90ea5dccc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65684383b371188f14171287",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8cf762c13221eb29ff931",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a2273b572f93ea4c72000c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596196356a21080a26b343b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ab204cab7244e7d68cfff",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ff8c85139e2e90e8d3063",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a8c0b56a21080a278bed3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656825cbb371188f14158643",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e91f18c3057914763c086",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0be4128fe21a8cb112c6e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6578186a3a256680f519bd02",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b5e5b984959b734a89072",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c19d6cab7244e7d70b5c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659388d80771f87efefb4c23",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655819e5677fedf2af3f2438",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655a07175c50a1da62a10b67",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4e744e32fc2fd7e7703e2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e6c16cab7244e7d74c645",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8b6c8c30579147635262",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c3167984959b734aadd46",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576ad2a3a256680f510a506",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a7a248678d000ab219f49f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556dd2254091050341c1a2d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658150e75139e2e90e92ad43",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562ed01b371188f14033bea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572bb6f3a256680f507f5d5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c2bc76e702d09dcaf2913",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583e1ed5139e2e90e9cb030",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657f0cf7cab7244e7d75e3d4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b702d56a21080a27acc1f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c57b56e702d09dcafda24",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65617dc8b371188f14ff81b4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567f68eb371188f14131d17",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569666cb371188f141dec85",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d19d26a37ec202052966a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65892d085139e2e90ead5d8e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dab888c3057914761503f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a6491138d54fed6ef19101",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a4ac08c452b4fba5c650cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f6d9128fe21a8cb0afe75",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65646057b371188f1405c11b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f0e2ed7c5b7ad6c760edc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ae07f6e702d09dcac58e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eae4807454fe5afc313cd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656af8526e702d09dcaceae2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566f9a2b371188f140e6ae1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65601ab83b3a73509b098fa3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570296bf0c610ed1b71dbc7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573dad73a256680f50abc1e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576e4983a256680f512f0ef",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6564295fb371188f1405399d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fd2e40b62e4524653341f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d8feda3ebbd69b0c71c61",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f9fb328fe21a8cb0c66d8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e97278c30579147642a5b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65829ccd5139e2e90e980442",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695555b371188f141d1da3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566af96b371188f140a88c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65579bf7677fedf2af3ebd49",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c6a29984959b734ad583a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b975f5139e2e90eb602ac",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e825b8c3057914762d51b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585406c5139e2e90ea390a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670bdfb371188f140fb709",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a402fa572f93ea4c7690aa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656fdf3b0b62e4524653f437",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a856c3a256680f528460f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65635d3db371188f14042d9c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6564237bb371188f14052dc4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571808f746d4d9eefbdde4c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657027bcf0c610ed1b71c173",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c270fcab7244e7d710b03",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656026233b3a73509b0a2386",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659fbb6b28fe21a8cb0de310",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658ba09a5139e2e90eb66ff7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582a32b5139e2e90e9841d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d5efd984959b734afacae",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a78bb5139e2e90eb2530f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65866bc95139e2e90ea63584",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656871bdb371188f141970e9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bc7ddcab7244e7d6d7160",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d499f6e702d09dcb2e731",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583c9eb5139e2e90e9c09e7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65573d7c677fedf2af3dbdfe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ac780984959b734a3e01d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658aaac25139e2e90eb42ab0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561f199b371188f1401a2a2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c0fdbcab7244e7d703d87",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65616f91b371188f14ff296f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577b7683a256680f5142107",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658b9d1b5139e2e90eb64327",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a20f0e572f93ea4c717c25",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d38e06a37ec202052ecf3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e930c8c3057914763d7f6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567eb8bb371188f141258d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569ad4eb371188f14211bdd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577edee3a256680f51735c5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655f1882d7c5b7ad6c76b542",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c12fccab7244e7d706656",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a39b64572f93ea4c758003",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ae50d984959b734a5292d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a10e98572f93ea4c6f19d4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588dff25139e2e90eaad1af",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e4fb9cab7244e7d7499c8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d71836e702d09dcb46405",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bd9f4cab7244e7d6e0ae3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656034bf3b3a73509b0a843e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bf7f9cab7244e7d6e8b7b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577e76b3a256680f51702ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a82385139e2e90eb2bd32",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0963328fe21a8cb0f0dd1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65729a2b3a256680f507671f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e72a45139e2e90ec08948",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566ebf6b371188f140d7e72",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f302e0b62e45246527d65",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566cc71b371188f140c4070",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e84f38c3057914762f3ee",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583ef325139e2e90e9d3939",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c2d4d984959b734aac39f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65616d143b3a73509b1014b9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d3a845139e2e90ebd299f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659638bd56a21080a26c4df9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658519455139e2e90ea1ea7c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a3c2ce572f93ea4c7621de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657d3efdcab7244e7d731b66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658be6125139e2e90eb819a7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65767d693a256680f50f8f9e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65961ee156a21080a26b7bfd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6598bf5256a21080a2755960",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584e9b95139e2e90ea012cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f9fef28fe21a8cb0c6a2d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cdff15139e2e90eba480b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bf59a5139e2e90eb8a8ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db5ffa3ebbd69b0c84339",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a5e0a4115b1da585969189",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568447cb371188f141727ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e1d886a37ec2020558142",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582917e5139e2e90e977c26",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6563fdc0b371188f1404a21f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656b603b6e702d09dcad9a13",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597722256a21080a2718378",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656dce718c3057914761c827",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566d7e1b371188f140c8061",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c0df7984959b734a99eb8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65975ccf56a21080a2707b6e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65741a303a256680f50b87b4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a0f30928fe21a8cb1307d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c7f83a256680f515084e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65631a4cb371188f1403b3e5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c23f3a256680f511794e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e8a848c3057914763429d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562f2dab371188f14034a44",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583e5f95139e2e90e9cd43d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559c6e85c50a1da62a02de8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65698782b371188f141ee6ab",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656a9858673edc5b574c6027",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658baf565139e2e90eb6bd91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65614f853b3a73509b0f477b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655eef2dd7c5b7ad6c749478",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657007c4f0c610ed1b706fe3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657677b33a256680f50f4967",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cab4c9705a8d4ee1f3c18",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658296bb5139e2e90e97a9d4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658946df5139e2e90eae750d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c1b40984959b734aa124c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a73da3a256680f5276b06",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6578139b3a256680f5194e9a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65941bcf0771f87efeffc079",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657676893a256680f50f398e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656988deb371188f141ef98a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dd6ca07454fe5afc17a8b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cef315139e2e90ebaeb6f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d8796a3ebbd69b0c6df91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d67146e702d09dcb41738",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658252f25139e2e90e95a299",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569417eb371188f141bd0b4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f5ec228fe21a8cb0a5978",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657962c03a256680f522bf19",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ea5ca07454fe5afc2bc0b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d5ec36a37ec202053456e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657e75b9cab7244e7d74dec0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588f9525139e2e90eabefbb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ca6f6984959b734ae9c10",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dc8440a869296a4add271",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658006175139e2e90e8df909",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65711baae46926eabf1b718a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bc2be56a21080a27e3481",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65816a0c5139e2e90e93efe0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d92466e702d09dcb5f26d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658549d75139e2e90ea402f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d5246984959b734af5cc5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e994b5139e2e90ec1ec84",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657adc5acab7244e7d6b28c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65658612b371188f140723c0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e9f818c3057914764ab4e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657445b13a256680f50c0e1e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65707e94e46926eabf1ace56",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b5153984959b734a85ca2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ebd848c30579147656e6f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bf897cab7244e7d6e93e3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b2250e591a87153241a1d9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657bfd7acab7244e7d6ece2a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e97838c305791476430c7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560a3583b3a73509b0e4d1f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65b6343384d8003638a9dfc1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659de8126a37ec202053870b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65707400e46926eabf1aad1c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657f959ecab7244e7d761c31",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657162c9e1c4488437d02da5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657ea780cab7244e7d755814",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556e46af247ccec37251c8d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6559dae35c50a1da62a07d0a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555eb6f54091050341a4afe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657665eb3a256680f50e732d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583f9535139e2e90e9defa9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566effdb371188f140db543",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65780f3e3a256680f518debb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656067a63b3a73509b0d0e50",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572b0fd3a256680f507cba8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65801e735139e2e90e8ec7b2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658e41515139e2e90ebf6a7a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6556d03054091050341bb92a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577c2e33a256680f514b30d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658116205139e2e90e911a07",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dbca40a869296a4ad1a97",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572c4503a256680f5083d49",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a8b48e2c13221eb29f6008",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657417753a256680f50b8000",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659a53b956a21080a2788b05",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6570421df0c610ed1b739e78",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65616d98b371188f14ff19cc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566c354b371188f140c089d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6585537b5139e2e90ea46be2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656197f1b371188f14000331",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569bf5ab371188f142177b6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572a0433a256680f5078740",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577fe6b3a256680f517d5d0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658aa7cf5139e2e90eb41b91",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e1b326a37ec2020557001",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a747f438d54fed6ef5ce61",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6584dd6a5139e2e90e9fceaf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e5360a54ffb8955311307",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594dc190771f87efe03ad50",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658531485139e2e90ea30912",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658bf0595139e2e90eb88557",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65603f6d3b3a73509b0abb4c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d1f316e702d09dcb0a655",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656842d6b371188f141703c3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b2843984959b734a78981",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ebf968c30579147657764",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6597691b56a21080a2710927",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ecf2cd7c5b7ad6c738d95",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656f01450b62e45246520bdb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65617105b371188f14ff35d2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6567fd7eb371188f1413a48d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65670673b371188f140f6d96",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65767da33a256680f50f927c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657668ad3a256680f50e8c54",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65ab38470fe49b1a457f3d56",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659678af56a21080a26ebcf2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655faec1d7c5b7ad6c789a0e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e97dea54ffb895532ed11",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554d2afd9b030bfa460ad63",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ebe6c07454fe5afc41264",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6592436e5139e2e90ec579ea",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cddceffc32fa81eb2dbca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65704456e46926eabf19dd5f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65549261d9b030bfa45f6b1e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596176656a21080a26b1a1c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e91148c3057914763ad3d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d2de76e702d09dcb12989",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bbf6f56a21080a27e00b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c18bd984959b734a9f491",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65556c1cd9b030bfa4618c88",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657913103a256680f51da216",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655dada3a3ebbd69b0c7d3e8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659665cc56a21080a26da1a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a29a6d572f93ea4c737309",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555b4e9fbfbe9529ceb679b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596256f56a21080a26bc2b0",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6562b993b371188f14028bfe",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6588f8615139e2e90eabe6a6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6593d5f20771f87efefe8331",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576da7c3a256680f512a071",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d5e296e702d09dcb3ddb9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576c28b3a256680f5117dc5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658cf8495139e2e90ebb335a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657184851987e25e25848f94",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fbd57cab7244e7d77d7f2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656197c2b371188f14000242",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65717d58746d4d9eefbda981",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659b533a56a21080a27946c4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656beeb56e702d09dcae28f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6569495ab371188f141c60a4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6594e05a0771f87efe03dbfc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6595778956a21080a26a3314",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bc6859705a8d4ee1d738b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659671df56a21080a26e4eb4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65687b7ab371188f141999bc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d8a926e702d09dcb57cec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6581b07c5139e2e90e94aacb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576816b3a256680f50fbd3c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656efbe90b62e4524651fa70",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65680293b371188f1413f5ec",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65605f393b3a73509b0c6f78",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658147c95139e2e90e92387a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659104645139e2e90ec4e462",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656db37d8c3057914761697c",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c987e984959b734ae791d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6571a0421987e25e258611d3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657806e03a256680f5184288",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582584a5139e2e90e95e800",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657289d53a256680f506d1e1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6583fb015139e2e90e9e0f66",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d071cffc32fa81eb47457",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659bc8f89705a8d4ee1d900a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b246a984959b734a75b25",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655c32b2984959b734aae842",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6568225db371188f14156bf4",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657a9ae93a256680f5288d9e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65992cd356a21080a2778156",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6596197156a21080a26b350a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658175285139e2e90e941fdd",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656849bfb371188f141795f1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d35a16e702d09dcb19cca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e51c4a54ffb89553102b7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658298265139e2e90e97bdc6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657691073a256680f5103682",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d6adf984959b734b02010",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655db31aa3ebbd69b0c816a8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657296333a256680f5074d36",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65795d503a256680f522349f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65555f9dd9b030bfa46168aa",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6577cd183a256680f5156c0d",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572daa23a256680f5092c53",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656bfe356e702d09dcae838b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658532ef5139e2e90ea3136b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655b491e984959b734a84577",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655a515d5c50a1da62a2134b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d66af6e702d09dcb413cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d353f5139e2e90ebcee7f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e1a8d6a37ec2020556bd1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65604cdc3b3a73509b0b3894",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658a3e4c5139e2e90eb0847e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555c387fbfbe9529cebb950",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d6295984959b734afcf73",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657c0d74cab7244e7d701ef1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656c63f96e702d09dcaff11e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65696380b371188f141dcfbc",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657fb385cab7244e7d7744a3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655ec36907454fe5afc453f8",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6580f2335139e2e90e8fb5de",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659d14b36a37ec2020526650",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657929de3a256680f51f21be",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e79148c3057914762834a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658d7ec45139e2e90ebdfc32",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65615e763b3a73509b0fa9c6",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6555c7a1fbfbe9529cebd9cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6566ad4ab371188f140a487e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656e96388c30579147641749",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658400205139e2e90e9e66f5",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6582c1a35139e2e90e9962fb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6573da613a256680f50aba46",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656ed0df8c30579147663338",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6561e2b4b371188f14017389",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d1f2d6e702d09dcb0a62f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65641f04b371188f140526cf",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659c039a9705a8d4ee1e5e7a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65780d3d3a256680f518b9db",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6560ae433b3a73509b0e914b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65605ee33b3a73509b0c657f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65703341f0c610ed1b72a025",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6572db833a256680f50933f7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659cb4e29705a8d4ee1fca29",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655d6f0c984959b734b04b37",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659f9bb228fe21a8cb0c37b3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "658121545139e2e90e91582e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65991fac56a21080a277570e",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659628d356a21080a26bdac2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657025cdf0c610ed1b71a551",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6558bcf45c50a1da629e36d7",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65618c99b371188f14ffc7f3",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e01166a37ec2020543f57",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65a111a4572f93ea4c6f38ca",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "659e1eb26a37ec2020558859",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656175b2b371188f14ff5be9",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65712497e46926eabf1bbc4b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6576ae183a256680f510aada",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6552db183de2a96680afc187",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65695547b371188f141d1ce2",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "657971e33a256680f523fa40",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "655824bc677fedf2af3f4ab1",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65585e445c50a1da629d082a",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6554e25dd9b030bfa460f5cb",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "65782aac3a256680f51b702f",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "6565bbd5b371188f1407b06b",
        "type_leavel_scholarships": 3
    },
    {
        "_id": "656d7b086e702d09dcb4a1d7",
        "type_leavel_scholarships": 4
    },
    {
        "_id": "65795ab23a256680f5220948",
        "type_leavel_scholarships": 4
    },
    {
        "_id": "656ed9dd8c30579147670796",
        "type_leavel_scholarships": 4
    },
    {
        "_id": "65795e3a3a256680f5224ee4",
        "type_leavel_scholarships": 4
    },
    {
        "_id": "65599acb5c50a1da629f9d0e",
        "type_leavel_scholarships": 4
    },
    {
        "_id": "658bdd185139e2e90eb7d65b",
        "type_leavel_scholarships": 4
    },
    {
        "_id": "6596650056a21080a26d9494",
        "type_leavel_scholarships": 4
    },
    {
        "_id": "65b3ab460b404a49855de878",
        "type_leavel_scholarships": 4
    },
    {
        "_id": "657135e7ea266f4fe6ab5c54",
        "type_leavel_scholarships": 4
    },
    {
        "_id": "65729b603a256680f5077186",
        "type_leavel_scholarships": 4
    },
    {
        "_id": "658e90035139e2e90ec1b0bf",
        "type_leavel_scholarships": 4
    },
    {
        "_id": "656988e2b371188f141ef9f3",
        "type_leavel_scholarships": 4
    },
    {
        "_id": "657c079ccab7244e7d6fbee3",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658901e05139e2e90eac480c",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655b0f01984959b734a610b4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656ee71b8c3057914767d7b8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6564bd7fb371188f14063e02",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655c39d1984959b734ab1bdd",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656da1678c30579147611236",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656045033b3a73509b0ad45b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656e78da8c305791476281cf",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657821693a256680f51a9fa9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65812a2c5139e2e90e917123",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6574095e3a256680f50b5368",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65691f3ab371188f141a9e82",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655c9ca6984959b734ae8673",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657291293a256680f5071eb6",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658a95bf5139e2e90eb3b34d",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6556026854091050341a8c46",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657fcf3dcab7244e7d7878d7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65609d7f3b3a73509b0e33bc",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655c7eb5984959b734ae13b2",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6569af2ab371188f14212a8b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659cdb6cffc32fa81eb2d759",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656023013b3a73509b0a0346",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658297995139e2e90e97b6da",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e7029a54ffb8955322f6b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659658f456a21080a26cf715",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656033683b3a73509b0a7ef4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65892b795139e2e90ead461f",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65680078b371188f1413d680",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656962efb371188f141dc8c8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e5df9a54ffb8955318e75",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6555b000fbfbe9529ceb5a5f",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65601cf33b3a73509b09a8dc",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6561ca87b371188f140141bc",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658900e35139e2e90eac3d0c",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657990103a256680f52554bd",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655c8054984959b734ae1a32",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65b5fcf184d8003638a746c2",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6588e9555139e2e90eab378b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65581eec677fedf2af3f34f3",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659cabbc9705a8d4ee1f4290",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e7c7ba54ffb89553253b9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658c4ae65139e2e90eb95939",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6597641556a21080a270cca1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6572e00e3a256680f5095b18",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6596401c56a21080a26c6bb3",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657bddadcab7244e7d6e1ad0",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6561802eb371188f14ff8d88",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65965ffc56a21080a26d4c80",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657a7f2f3a256680f52807ef",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656180c9b371188f14ff9260",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657822633a256680f51ab8bc",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6595287356a21080a269700a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655c3016984959b734aad7aa",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65717c2e746d4d9eefbd99ad",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6583f1e55139e2e90e9d605e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655ee7fdd7c5b7ad6c746b5a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6588529b5139e2e90eaa3e54",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657191a11987e25e25856dba",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658e4ab45139e2e90ebfb8cd",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658697835139e2e90ea6e176",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658150bd5139e2e90e92ab70",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6588cead5139e2e90eaa6819",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659dfa176a37ec202053f8c1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656017cf3b3a73509b09688b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6566df46b371188f140cbbc8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6583e96a5139e2e90e9cf17e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e45d6a54ffb8955306a13",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659669d256a21080a26dd535",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65b0d33652111443bcc6dc47",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6596677956a21080a26db6a2",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655eb29107454fe5afc34952",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6583eaba5139e2e90e9cfbd4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657b0326cab7244e7d6b7782",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6593d6590771f87efefe8baf",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658e4ca75139e2e90ebfc438",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657035a6f0c610ed1b72cfa3",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656032bb3b3a73509b0a7b96",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6594cdbf0771f87efe02fe49",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d05f4cab7244e7d722f4f",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655d776c984959b734b0a6b2",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65672a94b371188f14109f3f",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e5e92a54ffb8955319568",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6561932db371188f14ffed6a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6566e285b371188f140cf8c6",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656fc3370b62e4524652d2f8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65781eb63a256680f51a5bf8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65781dc23a256680f51a4717",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6582b0815139e2e90e98e769",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656aa334673edc5b574ca943",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d3dd36e702d09dcb22e2d",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6579199c3a256680f51e05ae",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659ea122a54ffb895532fde7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659ba49156a21080a27c1270",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65b0c6d452111443bcc5d34e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656e8cc88c305791476363e9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658106835139e2e90e90795e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d6a1a6e702d09dcb42faa",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6590ee535139e2e90ec4d2d1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65966c6b56a21080a26df9d9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657188b21987e25e2584dcdc",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65731a403a256680f509f70a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65a0dbd828fe21a8cb12109f",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659b873956a21080a27b6cf8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6582edd35139e2e90e99d421",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657809073a256680f5186991",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657cfafacab7244e7d7219e9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6596662b56a21080a26da7d8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6597710b56a21080a2716b89",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d0947cab7244e7d723a3e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65b5dc5f84d8003638a54cdd",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6561522f3b3a73509b0f5cf3",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65602c633b3a73509b0a5e73",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6577cfd43a256680f51598bc",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659cb6f69705a8d4ee1ff09c",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e9940a54ffb895532eed8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657829573a256680f51b4f1e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657cfaa7cab7244e7d721930",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65781e6e3a256680f51a56e1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658107185139e2e90e907edf",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656022ec3b3a73509b0a02b7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6559cf955c50a1da62a061b4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65b0c39152111443bcc58e73",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658a9ade5139e2e90eb3e05e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657cf856cab7244e7d721192",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65b24cd6591a8715324392e8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65729c573a256680f507755a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6596708256a21080a26e3c1e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65576a98677fedf2af3e40d4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659383a20771f87efefb067d",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655774dc677fedf2af3e614b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6566ea7cb371188f140d64ab",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6595f13756a21080a26a4fe8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6572a36f3a256680f50792dd",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657b16d2cab7244e7d6bba14",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65975e0256a21080a27086f9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6569a5bdb371188f1420cc47",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65800eb75139e2e90e8e4ecd",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e0d6e6a37ec202054ce3b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d38aacab7244e7d7303b5",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6566ddecb371188f140cab6b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6576b5cb3a256680f510e165",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656422cab371188f14052cc8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657faaa9cab7244e7d76d664",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656038de3b3a73509b0a9cc7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6577d44c3a256680f515dbf2",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65718dcc1987e25e258540aa",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657184ed1987e25e2584964b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65703948f0c610ed1b732693",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656e83c78c3057914762e3ba",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655f1363d7c5b7ad6c766c3c",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655efa7ed7c5b7ad6c74f911",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658cf0ae5139e2e90ebafc06",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d0847cab7244e7d7236fe",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6565a63fb371188f14076d3b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65704574e46926eabf19e663",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657c176dcab7244e7d7098e9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655851205c50a1da629cb822",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6560252e3b3a73509b0a18fa",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656aa8217402b9bc2abe78e0",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d0710cab7244e7d723424",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656fcdaa0b62e45246530124",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657002e6f0c610ed1b705fa1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659bb99a56a21080a27da016",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658297005139e2e90e97acd4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6560703d3b3a73509b0d6b8e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6595188256a21080a268beee",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65977e6256a21080a27234f7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6572d3ea3a256680f508db41",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65669b12b371188f14092001",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6596573e56a21080a26ce761",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d9f758c3057914760ffd2",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658a51605139e2e90eb19e40",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65825d065139e2e90e961650",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65680c29b371188f1414a489",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65781faa3a256680f51a72ca",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d0679cab7244e7d7231db",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656eebb20b62e4524651531a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6554cd41d9b030bfa4608d49",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659cb6039705a8d4ee1fe010",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65615a163b3a73509b0f8a9a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65781dad3a256680f51a45be",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656030f03b3a73509b0a73ed",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659663c756a21080a26d8382",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65728f3c3a256680f5070e2f",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659bc3ef56a21080a27e4377",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65617f2eb371188f14ff881c",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6593d8400771f87efefeb16f",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6588d9af5139e2e90eaa94e1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6569a20eb371188f1420918c",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d0639cab7244e7d722fdd",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6562e651b371188f14032da3",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658ac3b55139e2e90eb45ae7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d0895cab7244e7d72380a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659c043d9705a8d4ee1e6048",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6596592856a21080a26cf8cb",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65941f490771f87efeffc730",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655c291c984959b734aa9bef",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658401685139e2e90e9e7ef3",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656cabf06e702d09dcb06728",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65603e4f3b3a73509b0ab6d5",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659b966156a21080a27b9f3b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656e7da28c3057914762a40b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656c317f6e702d09dcaf4d3c",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65576e15677fedf2af3e4fa1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65699a59b371188f142014bb",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65606a2e3b3a73509b0d2dc2",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6593cfee0771f87efefdff33",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6565adaeb371188f14078b9b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65786cc63a256680f51cad58",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658940a15139e2e90eae3952",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6580fe145139e2e90e901aa4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656845a6b371188f141745d3",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65600241d7c5b7ad6c7928da",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6595f47056a21080a26a50d0",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655acb44984959b734a42443",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6596777956a21080a26ea97e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d64b36e702d09dcb4072f",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657189901987e25e2584efe4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655ec82707454fe5afc493da",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657826973a256680f51b1220",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65550dc5d9b030bfa46146ce",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6555f5ae54091050341a71a8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d9fac8c305791476102b5",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6559ca495c50a1da62a03902",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65817a195139e2e90e942e3e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65543dc53de2a96680b13a04",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65b5df4f84d8003638a58e84",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d8a056e702d09dcb577df",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6557e42c677fedf2af3eddf7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656020303b3a73509b09dfe6",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e5950a54ffb89553152f1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65af43d5fe16fbc49625dcfb",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65704976e46926eabf1a0181",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6566a9ccb371188f140a05f9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65702467f0c610ed1b719006",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657291a43a256680f50722b0",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d96f68c30579147609d68",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6588da725139e2e90eaa9a13",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65951c2556a21080a268e1ac",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6597785e56a21080a271cf2f",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65781e073a256680f51a4bb1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6559db5c5c50a1da62a07e74",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65965ce756a21080a26d2201",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6583fdc05139e2e90e9e4348",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655569ead9b030bfa4618314",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6573d55f3a256680f50aa812",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6583fc9f5139e2e90e9e2d05",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659d014effc32fa81eb4233a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d07aacab7244e7d7235e3",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6576794d3a256680f50f5e35",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6554dadbd9b030bfa460d598",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656069453b3a73509b0d1cbc",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d16becab7244e7d727b54",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658539605139e2e90ea3408a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d08eccab7244e7d72398d",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d70116e702d09dcb45e3c",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659bc8129705a8d4ee1d864d",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d4bdf6e702d09dcb30f02",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659519ed56a21080a268cde9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656cc6166e702d09dcb082e4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d5caa6e702d09dcb3d5c5",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6554bb53d9b030bfa4603efa",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656bfe6c6e702d09dcae845f",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65693f86b371188f141ba48b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655d80c8984959b734b10a74",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65718a391987e25e2584fe34",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655c71a3984959b734adb0c9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659f9e5028fe21a8cb0c5587",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e99aaa54ffb895532ef9c",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6555b941fbfbe9529ceb7388",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6583fb7a5139e2e90e9e17d8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6559f4135c50a1da62a0b626",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6599625256a21080a277de84",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656803c9b371188f141417d0",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658005f85139e2e90e8df736",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656fef0ed4c5dae496727b22",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656888c3b371188f1419cc15",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658a377c5139e2e90eb03525",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6596652256a21080a26d9619",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d0846cab7244e7d7236e9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658cd8e85139e2e90eba095a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6576bd003a256680f5112fe3",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d884f6e702d09dcb55d8a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656ed6a48c3057914766c8c4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657820d23a256680f51a9004",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65a094d128fe21a8cb0f0680",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d44eb6e702d09dcb2a02e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657816bb3a256680f5199ad1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65825e5f5139e2e90e9621e6",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658151f95139e2e90e92bebc",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65601f713b3a73509b09cea8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65698c96b371188f141f31c1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658b8ae25139e2e90eb561b9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658817ec5139e2e90eaa14c0",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e8f4aa54ffb895532d00c",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656e842e8c3057914762e9a0",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655625be54091050341af373",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65635bdbb371188f14042bcc",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d8e166e702d09dcb5b616",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655c66e7984959b734ad0bca",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65685670b371188f1418975c",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6595f93a56a21080a26a5415",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655c2125984959b734aa4faa",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656021163b3a73509b09e956",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6594219a0771f87efeffce13",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d8b866e702d09dcb58922",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659562be56a21080a26a0fb8",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d0e3bcab7244e7d724bca",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656e87fd8c30579147631b52",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6583fc905139e2e90e9e2b43",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e423fa54ffb8955304049",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e770fa54ffb89553247ce",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656961e3b371188f141db820",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6594206a0771f87efeffc9b0",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65718acf1987e25e25850a75",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659bc32856a21080a27e3a51",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65602f023b3a73509b0a6c8d",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659cbdac9705a8d4ee2058a6",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65810ce45139e2e90e90c490",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6556202a54091050341adf25",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657cf94ccab7244e7d7214c9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657037bcf0c610ed1b72f725",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658e52295139e2e90ebfe828",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657965313a256680f522faf4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6581276b5139e2e90e916be0",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655f560cd7c5b7ad6c78305d",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655c835d984959b734ae3498",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658189365139e2e90e94621a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d89986e702d09dcb5703c",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6576b4733a256680f510d62e",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6581539f5139e2e90e92d701",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6566aafbb371188f140a16c2",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65951fa456a21080a2690463",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65b0c5fe52111443bcc5c395",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6561834db371188f14ff9fb7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658129445139e2e90e91700d",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65643a07b371188f14055ea6",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655dd0c707454fe5afc14b87",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655c6561984959b734ace294",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65698d23b371188f141f3bff",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656586fdb371188f140726d7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65941ed30771f87efeffc64a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6569b4f2b371188f14214a92",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656d51216e702d09dcb36389",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656e00a58c305791476234e0",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658555345139e2e90ea47bef",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65781d5f3a256680f51a3d12",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657950c73a256680f5216895",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6583f7495139e2e90e9dc06b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65718f471987e25e2585539d",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655ee9fad7c5b7ad6c7475a9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6558a4f05c50a1da629dfd59",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658003305139e2e90e8dd176",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655eed24d7c5b7ad6c748964",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656ee3ea8c3057914767ae31",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6594d05a0771f87efe0322cc",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656062e63b3a73509b0cc392",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6557a7e9677fedf2af3ed150",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65941ff80771f87efeffc8cb",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657c040ecab7244e7d6f5f43",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6583fa425139e2e90e9e0425",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65582ac4677fedf2af3f623b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655ec41007454fe5afc45afe",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6584ee255139e2e90ea03275",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655ecbb3d7c5b7ad6c73560a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65684de9b371188f1417fca2",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658a97415139e2e90eb3c341",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656aa136673edc5b574c9c2d",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659cabba9705a8d4ee1f4240",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d075acab7244e7d723541",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6582a7f35139e2e90e987e73",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6565b0c1b371188f14079441",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656f61050b62e4524652b846",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656021cd3b3a73509b09f357",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65601c873b3a73509b09a511",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658a8c045139e2e90eb34e75",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6583a2ae5139e2e90e9ab010",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658ba05d5139e2e90eb66ca4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65766bd53a256680f50ea697",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656dd9dc8c3057914761e7aa",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656878b2b371188f14198fb0",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6583fcc55139e2e90e9e2fa9",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655ebe5f07454fe5afc411d7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65731c803a256680f509fb5b",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65767f553a256680f50fa5d3",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6573131f3a256680f509e6fb",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65795b803a256680f5221ab4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659c2dd89705a8d4ee1e8840",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655eaf6107454fe5afc320a7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65563eab54091050341b2100",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65692225b371188f141aac97",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657024b4f0c610ed1b7193e1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655de16707454fe5afc1b2cb",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659674f756a21080a26e7bb3",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65698d40b371188f141f3dc4",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6596615c56a21080a26d60a3",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e6362a54ffb895531d1aa",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6577d3a33a256680f515d1da",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6556367f54091050341b17e0",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655337503de2a96680b02c44",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656034863b3a73509b0a830a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658db98d5139e2e90ebe2c87",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65562cea54091050341b0359",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656e7bab8c30579147629294",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657868793a256680f51c9837",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6568586db371188f1418b694",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659cb55e9705a8d4ee1fd37f",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65966f0156a21080a26e2221",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658143565139e2e90e920808",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658156b65139e2e90e930952",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65845d485139e2e90e9fb064",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655eb87807454fe5afc3af1a",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658596325139e2e90ea544a5",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65545e353de2a96680b1e899",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659e70b1a54ffb8955323299",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65560f0d54091050341aa8c6",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657d06b5cab7244e7d7232fa",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657bff89cab7244e7d6eefab",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656184c9b371188f14ffa8a7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6583e0075139e2e90e9c9c76",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "656edf878c30579147676b42",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "655b47fb984959b734a84174",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657bc901cab7244e7d6d7c43",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6559dbe55c50a1da62a07fd6",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "65712702e46926eabf1bdac7",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6562bb25b371188f140291a1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "659d382f6a37ec202052eb53",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6571846c1987e25e25848dd1",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "657aa4403a256680f528c495",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "658801495139e2e90eaa01bb",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6555adc9fbfbe9529ceb4e6f",
        "type_leavel_scholarships": 5
    },
    {
        "_id": "6576cb783a256680f511ffa1",
        "type_leavel_scholarships": 5
    }
]

