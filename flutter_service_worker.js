'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f4e59acdfc0fa0b2b27ff16e2084e41b",
".git/config": "a35db0ebf1086f5b8a5c3b581db88746",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1f77b7bfa20af632162dcce4516d80b9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a5d9fb17deedc82bc0bf6539c5cb8694",
".git/logs/refs/heads/main": "3cf6190f68f78fed47c724dbc69bcba2",
".git/logs/refs/remotes/origin/main": "726eec9c2c2dbab15d8b9f37462b2cce",
".git/objects/04/67bf12aa4d28f374bb26596605a46dcbb3e7c8": "49dba9cdefacac2602a7af98a656e661",
".git/objects/05/4723806a153c6c8894ea6021d9ec13150c7e3b": "6261ead23eff5e957c5b5fabc034802e",
".git/objects/06/952be745f9fa6fa75196e830d9578eb2ee631d": "cb6848767aab99a89a4ec04efbc00625",
".git/objects/09/88e65c4035c7d73815911264fe285cb0826be1": "54df0ae7375e4d9709064e358fc725e1",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0a/3f5fa40fb3d1e0710331a48de5d256da3f275d": "15924b1217c401aba33f13069f7d81d5",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0d/2902135caece481a035652d88970c80e29cc7e": "dfc8c4c4b7d0a1b6dbadc04d9fa6e6f1",
".git/objects/0e/5c4ad9e5adcabe165b026083de1f32fe656614": "0fc21e18543fb7c6f80059f4ba5eadff",
".git/objects/0e/c303439225b78712f49115768196d8d76f6790": "383f775ddf0900dd9fe74e867c012ba4",
".git/objects/11/607366585015d5c07675a19b0590fd6bd42281": "900eac32c8e2edce53405ea087014c4a",
".git/objects/13/b35eba55c6dabc3aac36f33d859266c18fa0d0": "ccb5b80ef3b4fb1030a8a4f520f3f5e8",
".git/objects/13/d5b369fa532f6681e9f5c20740a08f0d6bdd44": "1ab697c276b976ca70bf84e4ad8bbd0a",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/15/3653e8d67f81b901d28257a65908f3278e058d": "753c81a6f016d29eb4605decbac41935",
".git/objects/16/431c41368b474515ce9fd760ef7f093a0c5728": "9db3d5569c0d478f8130d4db67ee4d30",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/18/1c7ad9e633a239e30edf5da954f2a0ea74bf3c": "55d5bd475ef16faafa0ca669748a496e",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/1b/256e202830e3bedf3cce200aea12c4f898db0a": "4d41035bdc2bf817ee0cdc06db8e45b8",
".git/objects/1c/4cfdd96a89b0095dbd29a6ca194e41ad77b4fd": "941033f2f51333a5217c535046bbd8e2",
".git/objects/1c/c1ff4c2bc77b00dfb50f74aa150005470b7eb8": "a6324d3f98e3bf214f33afa95254be5f",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/22/c4462b79288fe10768cc571a36732ce5726025": "3e3cf5fc8864e978934ad77759390731",
".git/objects/24/0a0d4b6dc607b591a830ec5ee2867679222652": "fa6d2e4e47e6a021178a12fd00875bb2",
".git/objects/24/a56924094f467a7f797875be72dc28a7bb5ffa": "db6949f1eaa8a9facd33a7869e24fa06",
".git/objects/25/97170821647d2bd8b150d973a35d27c99a5f44": "fabe737d09452c5014569b40baa991d9",
".git/objects/29/a3a5017f048d6d8e6a450eef64435ddee44fb7": "45542fd7e689386f166eed136e1ad478",
".git/objects/2e/1de87a7eb61e17463f7406106f6c413533cecf": "f4970286a19c04f87217910d26430ddf",
".git/objects/2f/1632cfddf3d9dade342351e627a0a75609fb46": "eebc09df6f2f2370e95a1eb0bc1fb2c5",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/32/1773cd857a8a0f0c9c7d3dc3f5ff4fb298dc10": "aa6f1636c8ce237c3c416d222abf03da",
".git/objects/32/2244545321ddd24142500ada04ad99b42929f6": "32334ea32a45fca64dd84c950f89233f",
".git/objects/32/6c0e72c9d820600887813b3b98d0dd69c5d4e8": "3030e2c76fcd41356672eee54ca3bd94",
".git/objects/34/7139c48727d4f32a2b9bac862fb4793356cc63": "f12c4e44afc2ef65f4df0d401fdf25b5",
".git/objects/36/b0fd9464f45b33f482e64bea579787e142affa": "9d308f3efbc512e2b01277fb7565acef",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/38/79d54755798567f0f318d63340508d5668eb96": "cfe50cd405acbf1c250baa58cfe6b9ed",
".git/objects/39/4917c053a04daa76d8b94f0a02db0bd99e1034": "bbdd537b090d83597a791f77deacff5c",
".git/objects/39/9f6981d5d35475eb18e6068ae67cdd7c731978": "d78434eb583745d7bf880eb7c4b9f3e2",
".git/objects/3a/0b46511a71b464dac72d693faae6ea0f7e3b2e": "351d4fd0e3a9a4bc304d0a579290669b",
".git/objects/3a/f93b882364ddc13fefa4826038d2c851bf5ea1": "e87d124937e3bd3d761e6be5e6312868",
".git/objects/3c/c05eb23491684aae1c51ce94668a142bad5125": "d7b0579a2c9bbcd5f15d386f2b10ecbd",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/3e/93413b1348f80307d986c7d9d2c3ff755ff610": "813858e141a159f2d7799c2f02550bea",
".git/objects/41/dffd916c819ce639f0636e55bb4082214acca3": "34adfc33311d3bfdfe5547bb15f7b79f",
".git/objects/42/bcbf4780b187e80025b7917058bcb882012aa1": "d13c60a94845ee93e5124ec90980bb48",
".git/objects/45/beb52eaa6b8606c6fcc64ec9b9987a5c922c67": "654075998e4a3cf381d6198afa23fa91",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/47/89daa6a443eefa7f3f729164a18351e06e9800": "3c2dcd6a17cdfc0957293d41ef712d24",
".git/objects/4c/d7b0099ca80c806f8fe495613e8d6c69460d76": "171b7f459d8f957102dab0e55cc51039",
".git/objects/4c/fcd01e672e8eb71cfb232254cdca108cad1d88": "4ceaeb5703f73fec167b38c1270ad83e",
".git/objects/4d/5de0f5ef5e00ae5d1e0d6dd5730e880704abb4": "255f92f997dcb44234980316046a4956",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/4e/c7918620af7986b558cd75ad267ed2e5772d16": "08ba46f2c26a977716152640b7d30e63",
".git/objects/50/2f463a9bc882b461c96aadf492d1729e49e725": "b4ba046789856764dffa013b321284b3",
".git/objects/50/3cca661382beb7469ff34b7e3fc64e79a1c65d": "6ec12afa2e49ea954c15f153991a86a0",
".git/objects/51/58e5fd006b4bc8b6f7636e3cd1ef3d1411c2dc": "3396a01c4337162038dd957cad89473f",
".git/objects/55/afd919c6591c63bfcfda8a5ce8a60acc7666ca": "d2f16b3aee4c82d6bd45ae20ebe432e2",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/5a/88276a7b36980d2efa2689a410aebb67aa65b8": "3f57df6a0c0d74a105194c1575657bd0",
".git/objects/5b/0e54a698272a6f9b21b929c8dc248c8fe55738": "07a8b4bd4b8f6c372128c8fab28e6395",
".git/objects/5d/3a1d53b5430b40c0342fce1f8a7edb6b04adc2": "2f8de1d92035c2f057f76aebdbb1d90a",
".git/objects/5d/b9ec8846bd077e8a87a2cb1d1c1be01f1efd15": "18dbded30210eaa3152175d2698edd4e",
".git/objects/60/608d0fe5bff3a7a7e05d5a232944a1a8effe5f": "e213f83927c2a4c19aa1b864a19eb852",
".git/objects/61/f3bd1fc504c3b78271416d8cfd14faa1dae2b4": "dfaf637924edb3f7b2913e26f2a71152",
".git/objects/62/6664468b8914efda0addf1322b12b8c0071710": "7a5c26b39c23a8312a631dd693b7dbdc",
".git/objects/63/2d2b2d22cecb11f32745c644c827ecf75669ff": "1d8497811ea25f1d195655c7fc614ac6",
".git/objects/66/a65d1e4a79f230031ec0e0959a721039e7282f": "2a87e723b46c44522c16c0968efa0152",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/6a/7fd4a1f6de5d7e1bb2d30d95af70952025b0e7": "1a6a506e687f1fb0059041b63b329312",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/6d/a0652f05f28fc6950cec20ebdfbae89b665479": "fccd5f0f0fbfe5ead1a5622148fb8d74",
".git/objects/6e/d2d933e1120817fe9182483a228007b18ab6ae": "e67768e46e6cb02c375dcbe6443df2e5",
".git/objects/70/a78135cecb3aca4901c5d6f37c2cc9e6cd9dac": "5556b7fd8c616b5db6d20bf53c29873c",
".git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "e07153a480d4e159b70f80851f6a553d",
".git/objects/73/53c41ecf9ca08017312dc233d9830079b50717": "32c4c29220bb05d460a969e7df99412c",
".git/objects/74/6adbb6b9e14b7e685c91e280a4d37a672afbd8": "eba295c22165b01ec06a735e4dbb3a44",
".git/objects/76/e1789b06850f063df87b763f25be27996e1488": "c89d99a85cd4a01ccd99d8ccd5d82e85",
".git/objects/77/681f469c9b9a74f4b9c2acb5e4a76be617e44b": "76c325c24d397756430a0300e7d7077b",
".git/objects/79/7d452e458972bab9d994556c8305db4c827017": "009f1a67118a52459bbc67f56c2ffd4a",
".git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "91f6523d91623d19d122fea7b32a3db9",
".git/objects/7b/b2df6ba6ea53ebbee820728a3eef274ddd71bd": "9195deeb5096ebb7505c546affae444f",
".git/objects/7c/56964006274498b0edaa77763cdd72c6d42b6a": "7cf18aae775e8f317b2bead42a68f097",
".git/objects/80/e867a4e06b4dc26d0a2b327cbd54041addc50a": "a256672b7db051545b2b39eb821c1510",
".git/objects/82/b6f9d9a33e198f5747104729e1fcef999772a5": "32d0349a1626c50624f6aab0900c31d8",
".git/objects/83/5d9d6ca57f9012376000181dfbbe24a1266de4": "05285e3f9c92d130fc7a546113dc40a1",
".git/objects/84/ac32ae7d989f82d5e46a60405adcc8279e8001": "a7755246641eb6f0ea897123c42e7eeb",
".git/objects/85/2fa1a4728ae4789e3bca55dd07caef3b41f2a5": "97bf964ac33d3f622d940921761e740c",
".git/objects/85/f82d2f9f71871c9863d249c4365c209ea4f7fa": "98fec58bb45e1eff1366ce7754dfa1f4",
".git/objects/86/a7c3b1b6119f7dbdb8cec74f1b5b3e076bf949": "6a613891f55546675267dc93a78ff2c1",
".git/objects/87/3989c1e8584278f9dbde35562ac13a6056de7d": "c89ca7ad02cc2be502f07d794e386cac",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/53cba09064923c5daf2d37e7c3c836ccdd794b": "41d25b277c37a913abe0083c22f1e1b2",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f96a2c8ade099adb3fca57791d512ff901fc4a": "d25ee2521973bcf7a4fc7ba6e7142677",
".git/objects/8b/35ef8498a2f5b3a883e9b5d9205d67e10a3343": "f5b8b4b4dfc0c84f1721c6edd840bcfe",
".git/objects/8b/6d4680af388f28db8742ef7fb8246e2bb1fffb": "4e20d4660135ff8d41852fa5b986bfb5",
".git/objects/8b/d06bdf095c809f80d639847440b06b0199a88c": "58d6dcf8e95c016f9f2dd6468f1fcdf1",
".git/objects/8e/02df288835694650d8c57a5fffefcd8d7ff93f": "882bab960574ce8e0b09a28a5ca27ec1",
".git/objects/8e/3ca5dfe1936519e96475be8d0b5ff5faa43727": "497d1953bf8b42ffe41a214af0c8df37",
".git/objects/8e/940891213b854cceb67cedbdf7639ce76192a3": "2a6e9c02e8c3c3a2891f9c15b0c4dc71",
".git/objects/8f/80cede342cf135b0f990b448f25c1cf1c8fe81": "3216f3ea3f487949329d2b8212ae1ee7",
".git/objects/8f/fe69accadc2bfe347f931d9d540b690510fc34": "da6043b492e291b15995425c0ab2837c",
".git/objects/90/3f4899d6fced0eb941e159f7322b21b320c40c": "83b7d85886d6c364db4cef0543e046ee",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/91/cab92c332f0b91d7b1c9de29996d30fd4080e6": "c85f26487f8178a875603851d8588424",
".git/objects/91/f8548dd0ef326edab0192d342f77531ecfb8e1": "1cb33897d5758bf03955b53c3711b6e7",
".git/objects/93/bfffe5ed2ec2684cd1bb1e70cba4e2136e0dee": "b108b043bc790224c69504d5f17d7dce",
".git/objects/95/5ee3038f988929fac2dedb6a307ebd45dfcfd7": "84f4c0c3560baa9920ae37a5e8144c5e",
".git/objects/98/125de0c0c4964a93bbf6b7be36c9d1ac2deca4": "7e10c7465d94ffaf5cfa0e2dd7e84e0b",
".git/objects/98/9312ed1c3818cfc27e189af32a3e84324b9754": "dccea57ef37715e8c802feec68cc4698",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/a1/153bb6a7f7e24e3a3902d4ceb10759c4c847dd": "cb7a1533d773af94fc5d2dcd43b300f6",
".git/objects/a1/61708beae78d83da596f397d6d4a5e06da02c3": "571243b9b7d34afc1479d9ada19bf7af",
".git/objects/a2/ec33f19f110ebff51a23342d7bc29ec9a1aaa6": "48569d95657b1f4b8fad6b6e730d4334",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a8/7eef84a5d29844f41176f808a797cea593616b": "bbe3fc3e1c5e6135804ae185063dc396",
".git/objects/a8/e64fdfeb26c1371bc1169043e31175cea36ef3": "ee36831733b04277c6a77d9ebfa7d16c",
".git/objects/b3/f1b354ddbaacaef8617fa4c2493e3f6a3c3a63": "23f6d7fbbf6ca65660541e5ac91c5b4a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ad1fa7488a13d5f0a4fb2b528f03ddf586f75c": "79b740b747ec042e2b8da33ecdb38ee3",
".git/objects/b8/9367dffa9643cfb46ef86cbf9917c0244ec497": "913e2668e7b127cba7d5744f5fb40066",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3c4c30c16703f640bc38523e56204ade09399e": "d81d171c0590dfeb78e8d6c404330bb1",
".git/objects/b9/e43bd37614c4e28ab1d41c3d6a262832ce26e4": "9bb221d970b87f05316822a1189e36ba",
".git/objects/ba/f3d77f76706dbc82162dd6bc9a1365ac5be830": "3fdbb77ecc95ce55cfcedebbe781f150",
".git/objects/bd/b57226d5f2bd20f11934f4903f16459cf52379": "3289c6c0ee8813484d2b33d6c6e1df10",
".git/objects/c0/4e20caf6370ebb9253ad831cc31de4a9c965f6": "5e216dece9f226a4ac045363fbbe142a",
".git/objects/c2/aa44bdbe856257705e6f82b9cec58a6ee54a5b": "078058755c02dd8f7c4f0568853c6eb8",
".git/objects/c2/efd0b608ba84712fb3e1d01122468a50c7fba1": "5841aa09610800cbb88a643fdc9ede63",
".git/objects/c4/3cc9b8ba4e4ae5c6df5ed5e3f199668b7fead0": "e70044978ca80324fbe375a7e1547ad3",
".git/objects/c4/3db629b58f3d425dd071cdcfcce513ef0f6fa5": "f1bfd4353fe142b2cbe9311be770d071",
".git/objects/c6/5046598eb5688f722a6c147011a02d69663498": "9f43e01afba5a4dc91c0d45d819a67fb",
".git/objects/c9/48d876045e52938f5173ab725b51a91afbc8d3": "70ff9473003094d98afd36d97a3af3c2",
".git/objects/cb/1ef88056edd1caf99a935e434e7ff6943a0ef6": "06da19129aec844c2a975f2175eb659b",
".git/objects/cb/b6965e9fefe85ad7d975d329d93c3e28fcb139": "72eae194a1ae9ab0f449cfe11f7b52a1",
".git/objects/cc/cf817a52206e8a8eef501faed292993ff21a31": "1b4dd6ab7f4ca9073eac414dd6794fd6",
".git/objects/cd/8be3a52df6bd85e6bb5626868945e4fd64a419": "4ed53ac62489a61a625867fd5b9e4fb1",
".git/objects/d0/651fda5fbc1e0e728fe38d2abc65f7250c177d": "6bc02ac128f6ce47d177770d0a6103f8",
".git/objects/d1/1a8c74a9b2e9dfebabb12cd1fb9223759003ca": "ec1fa04be4e880eb1b3a06442cc8aa28",
".git/objects/d2/55d40559f8be1367719d421c904072e6b2ba80": "02313c844b3e100caa0b181497fda9c6",
".git/objects/d2/ffbffa4cd251cc00b2b93a5efc2a0213460220": "f43644ca180979b0822f0df06d3031f5",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "e3677ae8914304b8340d8db27e7db71a",
".git/objects/d5/bd01648a96d50136b2a97c8bb9aa5b711f6c39": "b52bbb3aa77140bdf2d47814158cba7d",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/bbe30d5b0ffa214c543420364eaf8887ff1aa2": "7906f8832b1cab377374845e1e7367ce",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/da/8cb85301fcf6d0b65a58ae13fb92575616ad16": "9f410d9efa4dc1a24ac3efdbde52aa57",
".git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/dc/139d85a93101cc0f6e9db03a3e1a9f68e8dd7e": "c815b8cd55031858470b95979194ad21",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dd/db8a30c851e7ef5b16a9108934bd1217b6b43f": "e943b985c0fbc94ad354f2ada89b854d",
".git/objects/df/f4f49561c816f70eaea557d889d31cf63447ac": "fccf1f0ce075ef8d3a1ae932cbc31552",
".git/objects/e0/f0a47bc08f30b550b47b01de4c9206b6824dd9": "5ef61d56b6220833037adc3dc3871ecb",
".git/objects/e3/3142e71bfc751ce1d7a7d46406235425786005": "71cc9d64983f89c56658f9ade44a4809",
".git/objects/e5/9d31158f5efe8be0b597d4f4263c5964b405ef": "600449cf92edfa54423b463aaace7b8b",
".git/objects/e7/1a16d23d05881b554326e645083799ab9bfc5e": "35049fca5b8153e0c0cd520b5503c269",
".git/objects/e7/6a3bc05aa1dac65253643de35ff6243a3bfb37": "24ffab498452543c37ffdd3c4a8a23a7",
".git/objects/e7/c5c54370372a4cdde7288a32733998d87bd767": "37c17914ddc243c1c81881069106b916",
".git/objects/e9/01dde684ea8ba25c50ea5dc7d5900da31a30d4": "8688207d9bdc19977b061c06f0972db7",
".git/objects/e9/f5fea27c705180eb716271f41b582e76dcbd90": "45a0061e76512ff597b88e29748f3ada",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/d1616503d2063c823d77ddbd03ce3e3e936889": "779646964d80a093209a922425c1378b",
".git/objects/f0/83318e09ca1b6b8484b1694a149f0c5d5cac1d": "541f4960a70ea9c895b2c21196ef40a7",
".git/objects/f2/878b2c9a72243848f339f117773de9afc3cbf1": "2f4ff6dc5ddf9a3909c4ddab15b680eb",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f4/f6dbdbfcfdc9ea12d45197049e9dabcf6850e3": "53e9b7a63d471fc2d8d4e6af3d43e8e0",
".git/objects/f5/8bb76100e82ec653e9b32a02d18d9232922d51": "e732ad2f094017daf1f16b50afd7c1d0",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/fe/730945a01f64a61e2235dbe3f45b08f7729182": "1dfc0ae4480d18f6ff6e8730ef3222d1",
".git/objects/ff/a17b7e22f28da70993546e19a5842deb8e9226": "04fa288143487e4410de23e5a25b7fd1",
".git/refs/heads/main": "4a04f67483cfe06e25dedff557fbaf98",
".git/refs/remotes/origin/main": "8674a261e99d49e7953bf6a69dd4f3f0",
"assets/asset/images/apple.png": "8043fa84c8b9aaf42ed0f67c4fdf75be",
"assets/asset/images/google.png": "1d94cfe2ce6b5f05f74684ac04af8467",
"assets/asset/images/guest.png": "e1643eb72126edb03c5fb3f9ea45fdca",
"assets/asset/images/preview.png": "af2d8c63b15e9eb008c61e74f3222a5d",
"assets/asset/images/protein.png": "0d5c9bb760eba29a0c52928f671a831f",
"assets/asset/images/splash_screen.png": "e0166949c610fa0677fe443267247043",
"assets/AssetManifest.bin": "bd38d38dbe5009f1aa1efa68354f22df",
"assets/AssetManifest.bin.json": "52482a95b0337a648fa07e44dbf55080",
"assets/AssetManifest.json": "032192b8b3df93f662b45745b295f395",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0d87d5acc28b97271c476a967cfbf3f6",
"assets/NOTICES": "b5d6ff4224f373bd13b0513951ed8edf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "6304443ff1d8b90a26170e154d266a52",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "168d30bf2865217c24c0b411236450f2",
"/": "168d30bf2865217c24c0b411236450f2",
"main.dart.js": "1691aebbc9ef54b7b317da597048b13a",
"manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"splash/img/dark-1x.png": "99281f5ca1ea5f1265c6ec42add3da28",
"splash/img/dark-2x.png": "3b0f5763c6e3664bdff57b0eb525e32e",
"splash/img/dark-3x.png": "8699dd94e987ed3f6322cb17eb891815",
"splash/img/dark-4x.png": "4026d60c7def1f494facfdd5213d8515",
"splash/img/light-1x.png": "99281f5ca1ea5f1265c6ec42add3da28",
"splash/img/light-2x.png": "3b0f5763c6e3664bdff57b0eb525e32e",
"splash/img/light-3x.png": "8699dd94e987ed3f6322cb17eb891815",
"splash/img/light-4x.png": "4026d60c7def1f494facfdd5213d8515",
"version.json": "b07421f69d245996e47fbe6d359625d1",
"web.iml": "90c2ef41404ebcd3f7bbadd6960d29e8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
