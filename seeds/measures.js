exports.seed = function(knex, Promise) {

  const val = [
    [1, '20140309', 0, '20141123', 0, '20140309', 0, '20141123', 0, null, '20141123', '20141123', '20141123', '20141123', '20141123'],
    [2, '20140125', 0, '20140611', 0, '20140125', 0, '20140611', 0, '20140611', '20140611', null, null, null, null],
    [3, '20140207', 0, '20140904', 0, '20140207', 0, '20140904', 0, null, '20140904', '20140904', null, null, null],
    [4, '20140313', 0, '20141111', 0, '20140313', 0, '20141111', 0, null, '20141111', '20141111', null, null, null],
    [5, '20140201', 0, '20150314', 41, '20140201', 41, '20150314', 41, null, '20150314', '20150314', null, null, null],
    [6, '20140310', 0, '20140527', 0, '20140310', 0, '20140527', 0, null, '20140527', '20140527', null, null, null],
    [7, '20140403', 0, '20150425', 22, '20140403', 22, '20150425', 22, null, '20150425', '20150425', null, null, null],
    [8, '20140214', 0, '20140312', 0, '20140214', 0, '20140312', 0, null, '20140312', '20140312', null, null, null],
    [9, '20140308', 0, '20150214', 0, '20140308', 0, '20150214', 0, '20150214', '20150214', '20150214', '20150214', '20150214', '20150214'],
    [10, '20140204', 0, '20150329', 53, '20140204', 53, '20150329', 53, null, '20150329', '20150329', null, null, null],
    [11, '20140502', 2, '20150518', 16, '20140502', 16, '20150518', 16, null, '20150518', null, '20150518', '20150518', '20150518'],
    [12, '20140327', 0, '20140420', 0, '20140327', 0, '20140420', 0, '20140420', '20140420', '20140420', '20140420', '20140420', '20140420'],
    [13, '20140530', 28, '20150424', 0, '20140530', 0, '20150424', 0, null, '20150424', '20150424', '20150424', '20150424', null],
    [14, '20140315', 0, '20140510', 0, '20140315', 0, '20140510', 0, '20140510', '20140510', '20140510', null, null, null],
    [15, '20140224', 0, '20140414', 0, '20140224', 0, '20140414', 0, '20140414', '20140414', '20140414', null, null, null],
    [16, '20140329', 0, '20140402', 0, '20140329', 0, '20140402', 0, null, '20140402', '20140402', null, null, null],
    [17, '20140522', 13, '20140703', 0, '20140522', 0, '20140703', 0, null, '20140703', null, null, null, null],
    [18, '20140212', 0, '20140520', 0, '20140212', 0, '20140520', 0, '20140520', null, '20140520', null, null, null],
    [19, '20140522', 8, '20150505', 0, '20140522', 0, '20150505', 0, null, '20150505', '20150505', null, null, null],
    [20, '20140310', 0, '20140617', 0, '20140310', 0, '20140617', 0, '20140617', '20140617', '20140617', '20140617', '20140617', '20140617'],
    [21, '20140401', 0, '20150312', 0, '20140401', 0, '20150312', 0, '20150312', '20150312', '20150312', '20150312', '20150312', '20150312'],
    [22, '20140421', 0, '20140930', 0, '20140421', 0, '20140930', 0, '20140930', '20140930', '20140930', '20140930', '20140930', '20140930'],
    [23, '20140328', 0, '20141103', 0, '20140328', 0, '20141103', 0, null, '20141103', '20141103', '20141103', '20141103', null],
    [24, '20140531', 13, '20150707', 37, '20140531', 37, '20150707', 37, '20150707', '20150707', '20150707', '20150707', '20150707', '20150707'],
    [25, '20140511', 0, '20140917', 0, '20140511', 0, '20140917', 0, '20140917', '20140917', '20140917', null, null, null],
    [26, '20140425', 0, '20141219', 0, '20140425', 0, '20141219', 0, null, '20141219', '20141219', '20141219', '20141219', '20141219'],
    [27, '20140614', 18, '20140831', 0, '20140614', 0, '20140831', 0, null, '20140831', '20140831', '20140831', '20140831', '20140831'],
    [28, '20140629', 17, '20140901', 0, '20140629', 0, '20140901', 0, '20140901', '20140901', '20140901', '20140901', '20140901', null],
    [29, '20140701', 18, '20141013', 0, '20140701', 0, '20141013', 0, null, '20141013', '20141013', '20141013', '20141013', null],
    [30, '20140329', 0, '20150313', 0, '20140329', 0, '20150313', 0, null, '20150313', '20150313', '20150313', '20150313', '20150313'],
    [31, '20140630', 7, '20150802', 33, '20140630', 33, '20150802', 33, null, null, '20150802', null, null, null],
    [32, '20140409', 0, '20141231', 0, '20140409', 0, '20141231', 0, '20141231', '20141231', '20141231', null, null, null],
    [33, '20140329', 0, '20150122', 0, '20140329', 0, '20150122', 0, '20150122', '20150122', '20150122', '20150122', '20150122', '20150122'],
    [34, '20140512', 0, '20140831', 0, '20140512', 0, '20140831', 0, '20140831', '20140831', '20140831', null, null, null],
    [35, '20140530', 0, '20150601', 2, '20140530', 2, '20150601', 2, '20150601', '20150601', null, '20150601', '20150601', '20150601'],
    [36, '20140420', 0, '20141007', 0, '20140420', 0, '20141007', 0, null, '20141007', '20141007', '20141007', '20141007', '20141007'],
    [37, '20140706', 0, '20150319', 0, '20140706', 0, '20150319', 0, null, '20150319', '20150319', null, null, null],
    [38, '20140601', 0, '20150118', 0, '20140601', 0, '20150118', 0, '20150118', '20150118', '20150118', null, null, null],
    [39, '20140716', 0, '20150221', 0, '20140716', 0, '20150221', 0, '20150221', '20150221', '20150221', null, null, null],
    [40, '20140601', 0, '20141123', 0, '20140601', 0, '20141123', 0, null, '20141123', '20141123', null, null, '20141123'],
    [41, '20140503', 0, '20140807', 0, '20140503', 0, '20140807', 0, null, '20140807', '20140807', null, null, '20140807'],
    [42, '20140710', 0, '20150828', 49, '20140710', 49, '20150828', 49, '20150828', '20150828', '20150828', '20150828', '20150828', '20150828'],
    [43, '20140613', 0, '20140828', 0, '20140613', 0, '20140828', 0, null, null, '20140828', null, null, null],
    [44, '20140806', 12, '20140909', 0, '20140806', 0, '20140909', 0, null, '20140909', '20140909', null, null, '20140909'],
    [45, '20140621', 0, '20140819', 0, '20140621', 0, '20140819', 0, '20140819', '20140819', '20140819', null, null, null],
    [46, '20140628', 0, '20150510', 0, '20140628', 0, '20150510', 0, null, '20150510', '20150510', null, null, '20150510'],
    [47, '20140805', 6, '20141128', 0, '20140805', 0, '20141128', 0, null, '20141128', '20141128', null, null, null],
    [48, '20140830', 30, '20150109', 0, '20140830', 0, '20150109', 0, '20150109', '20150109', '20150109', '20150109', '20150109', '20150109'],
    [49, '20140523', 0, '20150410', 0, '20140523', 0, '20150410', 0, null, '20150410', '20150410', null, null, null],
    [50, '20140703', 0, '20141011', 0, '20140703', 0, '20141011', 0, '20141011', '20141011', '20141011', null, null, null],
    [51, '20140527', 0, '20150301', 0, '20140527', 0, '20150301', 0, '20150301', '20150301', '20150301', '20150301', '20150301', '20150301'],
    [52, '20140618', 0, '20140625', 0, '20140618', 0, '20140625', 0, null, '20140625', null, null, null, null],
    [53, '20140522', 0, '20150213', 0, '20140522', 0, '20150213', 0, null, '20150213', '20150213', null, null, null],
    [54, '20140630', 0, '20150805', 36, '20140630', 36, '20150805', 36, null, '20150805', '20150805', '20150805', '20150805', '20150805'],
    [55, '20140624', 0, '20150412', 0, '20140624', 0, '20150412', 0, null, '20150412', '20150412', null, null, null],
    [56, '20140923', 29, '20150504', 0, '20140923', 0, '20150504', 0, '20150504', '20150504', '20150504', '20150504', '20150504', '20150504'],
    [57, '20140916', 19, '20150615', 0, '20140916', 0, '20150615', 0, '20150615', '20150615', '20150615', '20150615', '20150615', null],
    [58, '20140625', 0, '20150321', 0, '20140625', 0, '20150321', 0, '20150321', '20150321', null, null, null, null],
    [59, '20140917', 20, '20141203', 0, '20140917', 0, '20141203', 0, null, '20141203', '20141203', '20141203', '20141203', '20141203'],
    [60, '20140925', 25, '20141123', 0, '20140925', 0, '20141123', 0, null, '20141123', '20141123', null, null, null],
    [61, '20140808', 0, '20140828', 0, '20140808', 0, '20140828', 0, null, '20140828', '20140828', null, null, null],
    [62, '20140717', 0, '20150728', 11, '20140717', 11, '20150728', 11, null, '20150728', '20150728', null, null, null],
    [63, '20141011', 24, '20150409', 0, '20141011', 0, '20150409', 0, null, '20150409', '20150409', null, null, '20150409'],
    [64, '20140826', 0, '20150412', 0, '20140826', 0, '20150412', 0, '20150412', null, null, null, null, null],
    [65, '20140903', 0, '20150711', 0, '20140903', 0, '20150711', 0, null, '20150711', null, null, null, null],
    [66, '20140626', 0, '20140711', 0, '20140626', 0, '20140711', 0, null, '20140711', null, null, null, null],
    [67, '20141016', 23, '20150906', 0, '20141016', 0, '20150906', 0, null, '20150906', '20150906', null, null, null],
    [68, '20140729', 0, '20140730', 0, '20140729', 0, '20140730', 0, '20140730', '20140730', null, null, null, null],
    [69, '20141022', 26, '20150510', 0, '20141022', 0, '20150510', 0, null, '20150510', '20150510', '20150510', '20150510', '20150510'],
    [70, '20141025', 28, '20150302', 0, '20141025', 0, '20150302', 0, null, '20150302', null, '20150302', '20150302', '20150302'],
    [71, '20140817', 0, '20150810', 0, '20140817', 0, '20150810', 0, '20150810', '20150810', '20150810', '20150810', '20150810', '20150810'],
    [72, '20140823', 0, '20150813', 0, '20140823', 0, '20150813', 0, '20150813', '20150813', '20150813', null, null, null],
    [73, '20141001', 0, '20141010', 0, '20141001', 0, '20141010', 0, '20141010', null, null, null, null, null],
    [74, '20140917', 0, '20150127', 0, '20140917', 0, '20150127', 0, null, '20150127', '20150127', null, null, null],
    [75, '20140904', 0, '20150707', 0, '20140904', 0, '20150707', 0, null, '20150707', '20150707', null, null, null],
    [76, '20140825', 0, '20150829', 4, '20140825', 4, '20150829', 4, '20150829', '20150829', '20150829', null, null, null],
    [77, '20141026', 3, '20150925', 0, '20141026', 0, '20150925', 0, null, '20150925', '20150925', '20150925', '20150925', '20150925'],
    [78, '20140820', 0, '20141211', 0, '20140820', 0, '20141211', 0, null, '20141211', '20141211', null, null, null],
    [79, '20140819', 0, '20150120', 0, '20140819', 0, '20150120', 0, null, '20150120', null, null, null, null],
    [80, '20140916', 0, '20150822', 0, '20140916', 0, '20150822', 0, null, '20150822', '20150822', null, null, null],
    [81, '20141014', 0, '20141015', 0, '20141014', 0, '20141015', 0, null, '20141015', '20141015', '20141015', '20141015', '20141015'],
    [82, '20141112', 0, '20151005', 0, '20141112', 0, '20151005', 0, null, null, '20151005', '20151005', '20151005', '20151005'],
    [83, '20141114', 0, '20150111', 0, '20141114', 0, '20150111', 0, '20150111', '20150111', '20150111', null, null, null],
    [84, '20141127', 9, '20150415', 0, '20141127', 0, '20150415', 0, null, '20150415', null, '20150415', '20150415', '20150415'],
    [85, '20141027', 0, '20150408', 0, '20141027', 0, '20150408', 0, null, '20150408', '20150408', null, null, null],
    [86, '20140907', 0, '20141015', 0, '20140907', 0, '20141015', 0, '20141015', '20141015', '20141015', null, null, null],
    [87, '20140901', 0, '20150903', 2, '20140901', 2, '20150903', 2, '20150903', '20150903', '20150903', null, null, null],
    [88, '20141227', 20, '20150313', 0, '20141227', 0, '20150313', 0, null, '20150313', '20150313', null, null, null],
    [89, '20140929', 0, '20150710', 0, '20140929', 0, '20150710', 0, '20150710', '20150710', '20150710', null, null, null],
    [90, '20141021', 0, '20141028', 0, '20141021', 0, '20141028', 0, null, '20141028', '20141028', null, null, null],
    [91, '20141218', 0, '20150304', 0, '20141218', 0, '20150304', 0, '20150304', '20150304', null, null, null, null],
    [92, '20141101', 0, '20150414', 0, '20141101', 0, '20150414', 0, null, null, '20150414', null, null, null],
    [93, '20141206', 0, '20150731', 0, '20141206', 0, '20150731', 0, '20150731', '20150731', '20150731', '20150731', '20150731', '20150731'],
    [94, '20141205', 0, '20150209', 0, '20141205', 0, '20150209', 0, '20150209', '20150209', '20150209', '20150209', '20150209', '20150209'],
    [95, '20141031', 0, '20150222', 0, '20141031', 0, '20150222', 0, '20150222', '20150222', '20150222', '20150222', '20150222', '20150222'],
    [96, '20141225', 0, '20150405', 0, '20141225', 0, '20150405', 0, null, '20150405', null, null, null, null],
    [97, '20150211', 30, '20151227', 0, '20150211', 0, '20151227', 0, '20151227', '20151227', '20151227', null, null, null],
    [98, '20150120', 0, '20160205', 16, '20150120', 16, '20160205', 16, null, '20160205', '20160205', '20160205', '20160205', '20160205'],
    [99, '20150223', 30, '20150425', 0, '20150223', 0, '20150425', 0, '20150425', null, '20150425', '20150425', '20150425', null],
    [100, '20141205', 0, '20150521', 0, '20141205', 0, '20150521', 0, null, '20150521', null, '20150521', '20150521', '20150521'],
    [101, '20141226', 0, '20150730', 0, '20141226', 0, '20150730', 0, null, '20150730', '20150730', '20150730', '20150730', '20150730'],
    [102, '20141223', 0, '20151212', 0, '20141223', 0, '20151212', 0, null, null, '20151212', null, null, null],
    [103, '20150221', 13, '20150717', 0, '20150221', 0, '20150717', 0, '20150717', '20150717', '20150717', null, null, null],
    [104, '20141124', 0, '20150627', 0, '20141124', 0, '20150627', 0, null, '20150627', '20150627', '20150627', '20150627', '20150627'],
    [105, '20150112', 0, '20151107', 0, '20150112', 0, '20151107', 0, '20151107', '20151107', '20151107', '20151107', '20151107', '20151107'],
    [106, '20141125', 0, '20150509', 0, '20141125', 0, '20150509', 0, null, '20150509', '20150509', null, null, null],
    [107, '20141214', 0, '20150208', 0, '20141214', 0, '20150208', 0, '20150208', null, '20150208', '20150208', '20150208', '20150208'],
    [108, '20150129', 0, '20160214', 16, '20150129', 16, '20160214', 16, null, '20160214', null, '20160214', '20160214', '20160214'],
    [109, '20150327', 14, '20160110', 0, '20150327', 0, '20160110', 0, '20160110', '20160110', null, null, null, null],
    [110, '20150213', 0, '20160222', 9, '20150213', 9, '20160222', 9, null, '20160222', '20160222', '20160222', '20160222', '20160222'],
    [111, '20150203', 0, '20151025', 0, '20150203', 0, '20151025', 0, null, '20151025', '20151025', null, null, null],
    [112, '20150314', 0, '20150329', 0, '20150314', 0, '20150329', 0, '20150329', '20150329', '20150329', null, null, null],
    [113, '20150323', 3, '20150918', 0, '20150323', 0, '20150918', 0, '20150918', '20150918', '20150918', '20150918', '20150918', '20150918'],
    [114, '20150313', 0, '20160303', 0, '20150313', 0, '20160303', 0, '20160303', '20160303', '20160303', '20160303', '20160303', null],
    [115, '20150127', 0, '20160224', 28, '20150127', 28, '20160224', 28, null, '20160224', '20160224', null, null, null],
    [116, '20150316', 0, '20160327', 12, '20150316', 12, '20160327', 12, '20160327', '20160327', null, null, null, null],
    [117, '20150204', 0, '20150925', 0, '20150204', 0, '20150925', 0, '20150925', '20150925', '20150925', null, null, null],
    [118, '20150120', 0, '20150220', 0, '20150120', 0, '20150220', 0, null, '20150220', null, '20150220', '20150220', null],
    [119, '20150311', 0, '20150917', 0, '20150311', 0, '20150917', 0, null, '20150917', '20150917', null, null, null],
    [120, '20150304', 0, '20150704', 0, '20150304', 0, '20150704', 0, null, '20150704', '20150704', null, null, null],
    [121, '20150201', 0, '20150527', 0, '20150201', 0, '20150527', 0, null, '20150527', '20150527', null, null, null],
    [122, '20150121', 0, '20150325', 0, '20150121', 0, '20150325', 0, '20150325', '20150325', '20150325', null, null, null],
    [123, '20150502', 15, '20160226', 0, '20150502', 0, '20160226', 0, '20160226', '20160226', '20160226', '20160226', '20160226', '20160226'],
    [124, '20150505', 11, '20160424', 0, '20150505', 0, '20160424', 0, null, '20160424', '20160424', '20160424', '20160424', '20160424'],
    [125, '20150129', 0, '20160314', 45, '20150129', 45, '20160314', 45, '20160314', '20160314', '20160314', '20160314', '20160314', '20160314'],
    [126, '20150218', 0, '20160221', 3, '20150218', 3, '20160221', 3, '20160221', '20160221', '20160221', null, null, null],
    [127, '20150602', 27, '20150607', 0, '20150602', 0, '20150607', 0, null, '20150607', '20150607', '20150607', '20150607', '20150607'],
    [128, '20150608', 29, '20150819', 0, '20150608', 0, '20150819', 0, '20150819', '20150819', '20150819', null, null, null],
    [129, '20150427', 0, '20160620', 55, '20150427', 55, '20160620', 55, '20160620', '20160620', '20160620', null, null, null],
    [130, '20150311', 0, '20150608', 0, '20150311', 0, '20150608', 0, null, '20150608', '20150608', null, null, null],
    [131, '20150516', 0, '20160116', 0, '20150516', 0, '20160116', 0, '20160116', null, '20160116', null, null, null],
    [132, '20150320', 0, '20150326', 0, '20150320', 0, '20150326', 0, '20150326', '20150326', '20150326', null, null, null],
    [133, '20150516', 0, '20160409', 0, '20150516', 0, '20160409', 0, '20160409', null, '20160409', null, null, null],
    [134, '20150511', 0, '20160206', 0, '20150511', 0, '20160206', 0, null, null, '20160206', null, null, null],
    [135, '20150309', 0, '20151012', 0, '20150309', 0, '20151012', 0, null, '20151012', null, null, null, null],
    [136, '20150425', 0, '20160328', 0, '20150425', 0, '20160328', 0, '20160328', '20160328', '20160328', '20160328', '20160328', '20160328'],
    [137, '20150408', 0, '20151115', 0, '20150408', 0, '20151115', 0, '20151115', null, '20151115', null, null, null],
    [138, '20150411', 0, '20160208', 0, '20150411', 0, '20160208', 0, '20160208', '20160208', '20160208', null, null, null],
    [139, '20150417', 0, '20151124', 0, '20150417', 0, '20151124', 0, null, null, '20151124', null, null, null],
    [140, '20150701', 16, '20160511', 0, '20150701', 0, '20160511', 0, '20160511', '20160511', '20160511', null, null, null],
    [141, '20150507', 0, '20150519', 0, '20150507', 0, '20150519', 0, null, '20150519', '20150519', null, null, '20150519'],
    [142, '20150614', 0, '20151229', 0, '20150614', 0, '20151229', 0, null, '20151229', '20151229', '20151229', '20151229', '20151229'],
    [143, '20150717', 22, '20150922', 0, '20150717', 0, '20150922', 0, '20150922', '20150922', null, '20150922', '20150922', null],
    [144, '20150708', 12, '20151013', 0, '20150708', 0, '20151013', 0, '20151013', '20151013', '20151013', '20151013', '20151013', '20151013'],
    [145, '20150619', 0, '20160706', 18, '20150619', 18, '20160706', 18, null, null, '20160706', null, null, null],
    [146, '20150729', 30, '20160309', 0, '20150729', 0, '20160309', 0, null, '20160309', '20160309', '20160309', '20160309', '20160309'],
    [147, '20150722', 18, '20151005', 0, '20150722', 0, '20151005', 0, null, '20151005', '20151005', null, null, null],
    [148, '20150510', 0, '20160402', 0, '20150510', 0, '20160402', 0, '20160402', '20160402', '20160402', '20160402', '20160402', '20160402'],
    [149, '20150801', 26, '20160124', 0, '20150801', 0, '20160124', 0, '20160124', '20160124', '20160124', null, null, null],
    [150, '20150616', 0, '20151017', 0, '20150616', 0, '20151017', 0, null, '20151017', '20151017', null, null, null],
    [151, '20150628', 0, '20151130', 0, '20150628', 0, '20151130', 0, null, '20151130', '20151130', null, null, null],
    [152, '20150518', 0, '20160101', 0, '20150518', 0, '20160101', 0, null, '20160101', '20160101', null, null, null],
    [153, '20150609', 0, '20150609', 0, '20150609', 0, '20150609', 0, null, '20150609', '20150609', '20150609', '20150609', '20150609'],
    [154, '20150601', 0, '20150601', 0, '20150601', 0, '20150601', 0, null, null, '20150601', '20150601', '20150601', '20150601'],
    [155, '20150603', 0, '20150603', 0, '20150603', 0, '20150603', 0, null, '20150603', '20150603', null, null, null],
    [156, '20150806', 9, '20150806', 0, '20150806', 0, '20150806', 0, null, '20150806', '20150806', null, null, null],
    [157, '20150813', 10, '20150813', 0, '20150813', 0, '20150813', 0, null, '20150813', null, '20150813', '20150813', '20150813'],
    [158, '20150526', 0, '20150526', 0, '20150526', 0, '20150526', 0, null, '20150526', '20150526', null, null, null],
    [159, '20150719', 0, '20150719', 0, '20150719', 0, '20150719', 0, '20150719', '20150719', '20150719', null, null, null],
    [160, '20150730', 0, '20150730', 0, '20150730', 0, '20150730', 0, null, '20150730', null, '20150730', '20150730', '20150730'],
    [161, '20150809', 0, '20150809', 0, '20150809', 0, '20150809', 0, null, '20150809', '20150809', null, null, null],
    [162, '20150522', 0, '20150522', 0, '20150522', 0, '20150522', 0, '20150522', '20150522', '20150522', null, null, null],
    [163, '20150908', 27, '20150908', 0, '20150908', 0, '20150908', 0, '20150908', '20150908', null, '20150908', '20150908', null],
    [164, '20150712', 0, '20150712', 0, '20150712', 0, '20150712', 0, '20150712', '20150712', '20150712', '20150712', '20150712', '20150712'],
    [165, '20150730', 0, '20150730', 0, '20150730', 0, '20150730', 0, null, '20150730', '20150730', null, null, null],
    [166, '20150803', 0, '20150803', 0, '20150803', 0, '20150803', 0, '20150803', '20150803', '20150803', null, null, null],
    [167, '20150820', 0, '20150820', 0, '20150820', 0, '20150820', 0, null, '20150820', null, '20150820', '20150820', null],
    [168, '20150706', 0, '20150706', 0, '20150706', 0, '20150706', 0, null, '20150706', '20150706', null, null, null],
    [169, '20150616', 0, '20150616', 0, '20150616', 0, '20150616', 0, null, '20150616', '20150616', '20150616', '20150616', '20150616'],
    [170, '20150914', 10, '20150914', 0, '20150914', 0, '20150914', 0, null, '20150914', '20150914', null, null, null],
    [171, '20150728', 0, '20150728', 0, '20150728', 0, '20150728', 0, null, '20150728', '20150728', null, null, null],
    [172, '20151006', 29, '20151006', 0, '20151006', 0, '20151006', 0, null, '20151006', null, null, null, null],
    [173, '20151011', 30, '20151011', 0, '20151011', 0, '20151011', 0, '20151011', '20151011', null, null, null, null],
    [174, '20150914', 3, '20150914', 0, '20150914', 0, '20150914', 0, null, '20150914', '20150914', null, null, null],
    [175, '20150922', 11, '20150922', 0, '20150922', 0, '20150922', 0, '20150922', null, '20150922', '20150922', '20150922', null],
    [176, '20150718', 0, '20150718', 0, '20150718', 0, '20150718', 0, '20150718', '20150718', '20150718', '20150718', '20150718', '20150718'],
    [177, '20150920', 4, '20150920', 0, '20150920', 0, '20150920', 0, null, '20150920', '20150920', '20150920', '20150920', '20150920'],
    [178, '20150820', 0, '20150820', 0, '20150820', 0, '20150820', 0, '20150820', '20150820', '20150820', null, null, null],
    [179, '20150928', 8, '20150928', 0, '20150928', 0, '20150928', 0, null, '20150928', '20150928', null, null, null],
    [180, '20150822', 0, '20150822', 0, '20150822', 0, '20150822', 0, '20150822', null, null, null, null, null],
    [181, '20150928', 3, '20150928', 0, '20150928', 0, '20150928', 0, '20150928', '20150928', null, '20150928', '20150928', '20150928'],
    [182, '20150726', 0, '20150726', 0, '20150726', 0, '20150726', 0, '20150726', null, '20150726', null, null, null],
    [183, '20150820', 0, '20150820', 0, '20150820', 0, '20150820', 0, '20150820', '20150820', '20150820', '20150820', '20150820', '20150820'],
    [184, '20150814', 0, '20150814', 0, '20150814', 0, '20150814', 0, '20150814', '20150814', '20150814', '20150814', '20150814', '20150814'],
    [185, '20151003', 0, '20151003', 0, '20151003', 0, '20151003', 0, '20151003', '20151003', '20151003', null, null, null],
    [186, '20150819', 0, '20150819', 0, '20150819', 0, '20150819', 0, null, '20150819', '20150819', null, null, null],
    [187, '20151018', 4, '20151018', 0, '20151018', 0, '20151018', 0, '20151018', '20151018', '20151018', '20151018', '20151018', null],
    [188, '20150830', 0, '20150830', 0, '20150830', 0, '20150830', 0, '20150830', '20150830', '20150830', null, null, null],
    [189, '20150805', 0, '20150805', 0, '20150805', 0, '20150805', 0, '20150805', '20150805', '20150805', null, null, null],
    [190, '20150919', 0, '20150919', 0, '20150919', 0, '20150919', 0, '20150919', '20150919', '20150919', null, null, null],
    [191, '20151016', 0, '20151016', 0, '20151016', 0, '20151016', 0, null, null, null, null, null, null],
    [192, '20150925', 0, '20150925', 0, '20150925', 0, '20150925', 0, null, '20150925', '20150925', '20150925', '20150925', '20150925'],
    [193, '20150901', 0, '20150901', 0, '20150901', 0, '20150901', 0, '20150901', '20150901', '20150901', '20150901', '20150901', '20150901'],
    [194, '20151201', 25, '20151201', 0, '20151201', 0, '20151201', 0, null, '20151201', '20151201', null, null, null],
    [195, '20151007', 0, '20151007', 0, '20151007', 0, '20151007', 0, '20151007', '20151007', '20151007', null, null, null],
    [196, '20151206', 24, '20151206', 0, '20151206', 0, '20151206', 0, null, '20151206', '20151206', null, null, null],
    [197, '20151010', 0, '20151010', 0, '20151010', 0, '20151010', 0, '20151010', '20151010', '20151010', null, null, null],
    [198, '20151103', 0, '20151103', 0, '20151103', 0, '20151103', 0, '20151103', '20151103', '20151103', '20151103', '20151103', '20151103'],
    [199, '20151020', 0, '20151020', 0, '20151020', 0, '20151020', 0, null, '20151020', '20151020', '20151020', '20151020', '20151020'],
    [200, '20151114', 0, '20151114', 0, '20151114', 0, '20151114', 0, '20151114', '20151114', '20151114', null, null, null],
    [201, '20150915', 0, '20150915', 0, '20150915', 0, '20150915', 0, null, '20150915', '20150915', null, null, null],
    [202, '20150902', 0, '20150902', 0, '20150902', 0, '20150902', 0, '20150902', '20150902', '20150902', '20150902', '20150902', null],
    [203, '20151105', 0, '20151105', 0, '20151105', 0, '20151105', 0, null, '20151105', '20151105', '20151105', '20151105', '20151105'],
    [204, '20151011', 0, '20151011', 0, '20151011', 0, '20151011', 0, '20151011', '20151011', null, null, null, null],
    [205, '20151025', 0, '20151025', 0, '20151025', 0, '20151025', 0, '20151025', '20151025', '20151025', null, null, null],
    [206, '20151122', 0, '20151122', 0, '20151122', 0, '20151122', 0, '20151122', '20151122', '20151122', null, null, null],
    [207, '20151026', 0, '20151026', 0, '20151026', 0, '20151026', 0, null, null, null, null, null, null],
    [208, '20151003', 0, '20151003', 0, '20151003', 0, '20151003', 0, '20151003', '20151003', null, null, null, null],
    [209, '20151030', 0, '20151030', 0, '20151030', 0, '20151030', 0, null, '20151030', '20151030', '20151030', '20151030', '20151030'],
    [210, '20151211', 0, '20151211', 0, '20151211', 0, '20151211', 0, '20151211', '20151211', '20151211', '20151211', '20151211', null],
    [211, '20150924', 0, '20150924', 0, '20150924', 0, '20150924', 0, '20150924', '20150924', null, null, null, null],
    [212, '20151225', 5, '20151225', 0, '20151225', 0, '20151225', 0, '20151225', null, '20151225', null, null, null],
    [213, '20151201', 0, '20151201', 0, '20151201', 0, '20151201', 0, null, '20151201', '20151201', null, null, '20151201'],
    [214, '20151111', 0, '20151111', 0, '20151111', 0, '20151111', 0, null, '20151111', null, '20151111', '20151111', '20151111'],
    [215, '20151202', 0, '20151202', 0, '20151202', 0, '20151202', 0, null, '20151202', null, '20151202', '20151202', '20151202'],
    [216, '20160102', 8, '20160102', 0, '20160102', 0, '20160102', 0, null, null, null, null, null, null],
    [217, '20151228', 2, '20151228', 0, '20151228', 0, '20151228', 0, '20151228', '20151228', '20151228', null, null, null],
    [218, '20151210', 0, '20151210', 0, '20151210', 0, '20151210', 0, '20151210', '20151210', '20151210', null, null, null],
    [219, '20151206', 0, '20151206', 0, '20151206', 0, '20151206', 0, null, '20151206', '20151206', '20151206', '20151206', '20151206'],
    [220, '20160118', 14, '20160118', 0, '20160118', 0, '20160118', 0, '20160118', '20160118', '20160118', '20160118', '20160118', '20160118'],
    [221, '20151015', 0, '20151015', 0, '20151015', 0, '20151015', 0, null, '20151015', '20151015', '20151015', '20151015', '20151015'],
    [222, '20151114', 0, '20151114', 0, '20151114', 0, '20151114', 0, '20151114', '20151114', '20151114', '20151114', '20151114', '20151114'],
    [223, '20151223', 0, '20151223', 0, '20151223', 0, '20151223', 0, null, null, null, '20151223', '20151223', '20151223'],
    [224, '20151211', 0, '20151211', 0, '20151211', 0, '20151211', 0, '20151211', '20151211', '20151211', '20151211', '20151211', null],
    [225, '20151211', 0, '20151211', 0, '20151211', 0, '20151211', 0, '20151211', '20151211', null, null, null, null],
    [226, '20160215', 21, '20160215', 0, '20160215', 0, '20160215', 0, null, '20160215', null, '20160215', '20160215', '20160215'],
    [227, '20151128', 0, '20151128', 0, '20151128', 0, '20151128', 0, null, '20151128', '20151128', null, null, null],
    [228, '20151221', 0, '20151221', 0, '20151221', 0, '20151221', 0, null, '20151221', '20151221', null, null, null],
    [229, '20160215', 17, '20160215', 0, '20160215', 0, '20160215', 0, null, '20160215', '20160215', null, null, null],
    [230, '20151101', 0, '20151101', 0, '20151101', 0, '20151101', 0, null, '20151101', '20151101', '20151101', '20151101', '20151101'],
    [231, '20160109', 0, '20160109', 0, '20160109', 0, '20160109', 0, '20160109', '20160109', '20160109', null, null, null],
    [232, '20160208', 7, '20160208', 0, '20160208', 0, '20160208', 0, '20160208', '20160208', null, null, null, null],
    [233, '20151127', 0, '20151127', 0, '20151127', 0, '20151127', 0, null, '20151127', '20151127', null, null, null],
    [234, '20160228', 22, '20160228', 0, '20160228', 0, '20160228', 0, '20160228', '20160228', '20160228', '20160228', '20160228', '20160228'],
    [235, '20160201', 0, '20160201', 0, '20160201', 0, '20160201', 0, '20160201', '20160201', null, '20160201', '20160201', '20160201'],
    [236, '20151221', 0, '20151221', 0, '20151221', 0, '20151221', 0, null, null, '20151221', null, null, null],
    [237, '20160130', 0, '20160130', 0, '20160130', 0, '20160130', 0, null, '20160130', '20160130', null, null, null],
    [238, '20160205', 0, '20160205', 0, '20160205', 0, '20160205', 0, '20160205', '20160205', '20160205', null, null, null],
    [239, '20160129', 0, '20160129', 0, '20160129', 0, '20160129', 0, null, '20160129', '20160129', '20160129', '20160129', '20160129'],
    [240, '20160314', 29, '20160314', 0, '20160314', 0, '20160314', 0, null, null, '20160314', null, null, null],
    [241, '20160129', 0, '20160129', 0, '20160129', 0, '20160129', 0, '20160129', '20160129', '20160129', null, null, null],
    [242, '20160210', 0, '20160210', 0, '20160210', 0, '20160210', 0, '20160210', '20160210', '20160210', '20160210', '20160210', '20160210'],
    [243, '20160107', 0, '20160107', 0, '20160107', 0, '20160107', 0, null, '20160107', '20160107', '20160107', '20160107', '20160107'],
    [244, '20160211', 0, '20160211', 0, '20160211', 0, '20160211', 0, null, '20160211', '20160211', null, null, '20160211'],
    [245, '20160318', 24, '20160318', 0, '20160318', 0, '20160318', 0, null, '20160318', '20160318', null, null, null],
    [246, '20160221', 0, '20160221', 0, '20160221', 0, '20160221', 0, '20160221', '20160221', '20160221', '20160221', '20160221', null],
    [247, '20160305', 8, '20160305', 0, '20160305', 0, '20160305', 0, '20160305', '20160305', null, null, null, null],
    [248, '20151201', 0, '20151201', 0, '20151201', 0, '20151201', 0, null, '20151201', '20151201', '20151201', '20151201', '20151201'],
    [249, '20160219', 0, '20160219', 0, '20160219', 0, '20160219', 0, null, '20160219', '20160219', '20160219', '20160219', '20160219'],
    [250, '20160209', 0, '20160209', 0, '20160209', 0, '20160209', 0, '20160209', '20160209', '20160209', null, null, null],
    [251, '20160118', 0, '20160118', 0, '20160118', 0, '20160118', 0, '20160118', '20160118', '20160118', null, null, null],
    [252, '20151229', 0, '20151229', 0, '20151229', 0, '20151229', 0, '20151229', '20151229', null, null, null, null],
    [253, '20160112', 0, '20160112', 0, '20160112', 0, '20160112', 0, '20160112', '20160112', '20160112', null, null, null],
    [254, '20160221', 0, '20160221', 0, '20160221', 0, '20160221', 0, null, '20160221', '20160221', '20160221', '20160221', '20160221'],
    [255, '20160411', 18, '20160411', 0, '20160411', 0, '20160411', 0, null, null, '20160411', null, null, null],
    [256, '20160213', 0, '20160213', 0, '20160213', 0, '20160213', 0, '20160213', null, '20160213', '20160213', '20160213', '20160213'],
    [257, '20160130', 0, '20160130', 0, '20160130', 0, '20160130', 0, null, '20160130', '20160130', null, null, null],
    [258, '20160312', 0, '20160312', 0, '20160312', 0, '20160312', 0, null, null, '20160312', null, null, null],
    [259, '20160312', 0, '20160312', 0, '20160312', 0, '20160312', 0, null, '20160312', '20160312', '20160312', '20160312', '20160312'],
    [260, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [261, '20160319', 0, '20160319', 0, '20160319', 0, '20160319', 0, null, '20160319', '20160319', null, null, null],
    [262, '20160221', 0, '20160221', 0, '20160221', 0, '20160221', 0, null, '20160221', null, null, null, null],
    [263, '20160212', 0, '20160212', 0, '20160212', 0, '20160212', 0, '20160212', '20160212', '20160212', '20160212', '20160212', '20160212'],
    [264, '20160322', 0, '20160322', 0, '20160322', 0, '20160322', 0, '20160322', '20160322', '20160322', null, null, null],
    [265, '20160501', 10, '20160501', 0, '20160501', 0, '20160501', 0, '20160501', '20160501', '20160501', null, null, null],
    [266, '20160217', 0, '20160217', 0, '20160217', 0, '20160217', 0, null, '20160217', '20160217', null, null, '20160217'],
    [267, '20160410', 0, '20160410', 0, '20160410', 0, '20160410', 0, '20160410', '20160410', '20160410', null, null, null],
    [268, '20160307', 0, '20160307', 0, '20160307', 0, '20160307', 0, '20160307', '20160307', '20160307', '20160307', '20160307', '20160307'],
    [269, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [270, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [271, '20160411', 0, '20160411', 0, '20160411', 0, '20160411', 0, null, '20160411', '20160411', null, null, null],
    [272, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [273, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [274, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [275, '20160219', 0, '20160219', 0, '20160219', 0, '20160219', 0, null, '20160219', '20160219', null, null, null],
    [276, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [277, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [278, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [279, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [280, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [281, '20160309', 0, '20160309', 0, '20160309', 0, '20160309', 0, null, '20160309', '20160309', null, null, '20160309'],
    [282, '20160420', 0, '20160420', 0, '20160420', 0, '20160420', 0, null, '20160420', '20160420', null, null, null],
    [283, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [284, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [285, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [286, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [287, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [288, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [289, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [290, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [291, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [292, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [293, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [294, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [295, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [296, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [297, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [298, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [299, null, 0, null, null, null, null, null, null, null, null, null, null, null, null],
    [300, null, 0, null, null, null, null, null, null, null, null, null, null, null, null]
  ];

  var inserts = [];
  for (var i = 0; i < val.length; i++) {
    inserts.push(knex('measures').insert({ patient_id: val[i][0], initial_hra: val[i][1], days_late_initial_hra: val[i][2], recent_hra: val[i][3], days_late_recent_hra: val[i][4], initial_icp: val[i][5], days_late_initial_icp: val[i][6], recent_icp: val[i][7], days_late_recent_icp: val[i][8], c01_breast: val[i][9], c02_cancer: val[i][10], c03_flu_vac: val[i][11], c12_osteoporosis: val[i][12], c13_betus_eyecare: val[i][13], c14_betus_kidneycare: val[i][14] }));
  }
  return knex('patients').del().then(() => {
    return Promise.all(inserts);
  });
};
