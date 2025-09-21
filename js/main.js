// 语言配置
const translations = {
    'zh': {
        // 应用名称
        'appName': '钻领钻晶',
        'language': '中文',
        
        // 导航
        'nav.home': '首页',
        'nav.terms': '服务条款',
        'nav.privacy': '隐私政策',
        'nav.rules': '使用规则',
        'nav.compliance': '合规声明',
        'nav.features': '功能特点',
        'nav.howItWorks': '如何使用',
        'nav.faq': '常见问题',
        'nav.download': '立即下载',
        'nav.language': '语言切换',
        
        // 英雄区
        'hero.title': '钻领钻晶，轻松赚取积分',
        'hero.slogan': 'TakeGem, Earn Diamond Points',
        'hero.description': '通过观看广告、完成任务和邀请好友，轻松赚取可兑换奖励的积分。立即开始您的赚钱之旅！',
        'hero.downloadBtn': '立即下载',
        'hero.learnMoreBtn': '了解更多',
        
        // 功能特点
        'features.title': '功能特点',
        'features.watchAds.title': '观看广告赚积分',
        'features.watchAds.description': '轻松观看广告视频，每次观看都能获得积分奖励，积少成多，轻松赚取收益。',
        'features.dailyTasks.title': '每日任务',
        'features.dailyTasks.description': '完成简单的每日任务，获得额外积分奖励，任务种类丰富多样，满足不同用户需求。',
        'features.inviteFriends.title': '邀请好友',
        'features.inviteFriends.description': '邀请好友加入，双方都能获得奖励，您还能持续获得好友积分的10%作为额外收益。',
        'features.redeemRewards.title': '兑换奖励',
        'features.redeemRewards.description': '积分可兑换现金、礼品卡等多种奖励，最低2000积分即可提现，约合20美元。',
        'features.secureReliable.title': '安全可靠',
        'features.secureReliable.description': '严格遵守数据隐私法规，采用先进加密技术，确保您的个人信息和积分安全。',
        'features.multiPlatform.title': '多平台支持',
        'features.multiPlatform.description': '支持iOS和Android双平台，随时随地赚取积分，数据云端同步，永不丢失。',
        
        // 如何使用
        'howItWorks.title': '如何开始赚取积分',
        'howItWorks.step1.title': '下载应用',
        'howItWorks.step1.description': '从App Store或Google Play下载钻领钻晶应用',
        'howItWorks.step2.title': '注册账号',
        'howItWorks.step2.description': '创建您的个人账号，完善基本信息',
        'howItWorks.step3.title': '观看广告',
        'howItWorks.step3.description': '观看广告视频，立即获得积分奖励',
        'howItWorks.step4.title': '兑换奖励',
        'howItWorks.step4.description': '积分达到2000即可兑换奖励（约20美元）',
        
        // FAQ部分
        'faq.howToEarnPoints': '如何赚取积分？',
        'faq.whatArePointsUsedFor': '积分有什么用？',
        'faq.whyPointsNotArrived': '为什么积分没到账？',
        'faq.howToWithdrawRewards': '如何提现或兑换奖励？',
        'faq.whyCantWatchAds': '为什么无法观看广告？',
        'faq.howToInviteFriends': '如何邀请好友赚取奖励？',
        'faq.howToEarnAnswer': '您可以通过以下方式赚取积分：\n1. 观看激励视频广告\n2. 完成每日任务\n3. 邀请好友（您好友每日赚取积分的10%将作为奖励发放给您）\n4. 参与平台活动\n5. 好友通过您的邀请链接注册并完成首次广告观看（您将获得额外邀请奖励）',
        'faq.whatArePointsAnswer': '积分可按照兑换比例换取奖励。具体规则：\n1. 兑换比例：100积分=1美元\n2. 最低提现门槛：2000积分（相当于20美元）\n3. 兑换类型包括：电子礼品卡、现金提现、应用内虚拟物品及实物商品（以库存为准）',
        'faq.whyNotArrivedAnswer': '积分未到账可能有以下原因：\n1. 广告观看未完成或被系统判定为无效观看\n2. 网络延迟导致数据同步延迟（请等待5分钟并刷新）\n3. 邀请奖励需满足：好友当日产生有效积分且账号状态正常\n4. 账号异常或存在作弊行为\n5. 系统维护期间\n\n如问题持续存在，您可通过反馈功能提交详情。',
        'faq.howToWithdrawAnswer': '当您的积分达到最低兑换标准（2000积分=20美元）时，可按以下步骤操作：\n1. 进入"我的积分"页面\n2. 选择"兑换奖励"并根据提示选择兑换方式（现金/礼品卡等）\n3. 提交兑换申请等待审核（通常24小时内完成）\n\n注：兑换后积分将自动扣除。虚拟奖励即时到账，现金提现到账时间取决于支付渠道（通常1-3个工作日）。',
        'faq.whyCantWatchAnswer': '无法观看广告的可能原因：\n1. 网络连接不稳定或速度过慢\n2. 广告资源临时不足（请稍后再试）\n3. 达到每日观看上限（可参考"任务中心"每日观看次数）\n4. 设备存储空间不足或应用权限未开启（需允许"网络"和"存储"权限）\n5. 应用版本过低（请更新至最新版本）',
        'faq.howToInviteAnswer': '邀请好友步骤及奖励说明：\n1. 进入"邀请好友"页面获取您的专属邀请码或分享链接\n2. 好友通过您的链接/邀请码注册并登录\n3. 奖励机制：\n   - 好友完成首次广告观看：您和好友各得50积分\n   - 长期奖励：您将自动获得好友每日通过广告赚取积分的10%作为奖励（无上限，好友越活跃，您获得的奖励越多）\n\n奖励将在好友产生积分次日自动发放至您的账户，您可在"积分明细"中查看。',
        
        // 下载区域
        'download.title': '立即下载，开始赚取积分',
        'download.description': '钻领钻晶现已在各大应用商店上线，立即下载开始您的赚钱之旅！',
        'download.appStore': 'App Store 下载',
        'download.googlePlay': 'Google Play 下载',
        'download.qrCode': '扫码下载',
        'download.activeUsers': '活跃用户',
        'download.totalEarnings': '累计收益',
        'download.rating': '应用评分',
        
        // 页脚
        'footer.quickLinks': '快速链接',
        'footer.legal': '法律信息',
        'footer.contact': '联系我们',
        'footer.terms': '使用条款',
        'footer.privacy': '隐私政策',
        'footer.rules': '积分规则',
        'footer.compliance': '合规声明',
        'footer.appSupport': '应用内反馈',
        'footer.rights': '保留所有权利',
        'footer.slogan': 'TakeGem, 赚取钻石积分',
        'footer.links': '快速链接',
        'footer.copyright': '© 2024 钻领钻晶. 保留所有权利。',
        
        // 使用规则
        'rules.title': '使用规则',
        'rules.subtitle': '请仔细阅读以下规则，确保正确使用钻领钻晶应用',
        'rules.basic.title': '基本使用规则',
        'rules.basic.rule1': '用户必须年满18岁或在监护人同意下使用本应用。',
        'rules.basic.rule2': '每个用户只能注册一个账户，禁止创建多个账户。',
        'rules.basic.rule3': '用户需提供真实有效的个人信息进行注册。',
        'rules.basic.rule4': '禁止使用任何自动化工具或脚本来操作应用。',
        'rules.points.title': '积分获取规则',
        'rules.points.rule1': '观看完整广告可获得相应积分，中途退出不计分。',
        'rules.points.rule2': '每日签到可获得额外积分奖励。',
        'rules.points.rule3': '邀请好友成功注册可获得推荐奖励。',
        'rules.points.rule4': '积分有效期为获得后12个月，过期将自动清零。',
        'rules.withdrawal.title': '提现兑换规则',
        'rules.withdrawal.rule1': '最低提现金额为10元人民币。',
        'rules.withdrawal.rule2': '提现申请将在1-3个工作日内处理完成。',
        'rules.withdrawal.rule3': '每个用户每月最多可提现5次。',
        'rules.withdrawal.rule4': '提现账户信息必须与注册信息一致。',
        'rules.prohibited.title': '禁止行为',
        'rules.prohibited.rule1': '使用外挂、脚本或其他自动化工具。',
        'rules.prohibited.rule2': '恶意刷分或利用系统漏洞获取积分。',
        'rules.prohibited.rule3': '注册多个账户或代他人操作账户。',
        'rules.prohibited.rule4': '发布虚假信息或进行欺诈行为。',
        'rules.violations.title': '违规处理',
        'rules.violations.description': '对于违反使用规则的行为，我们将根据情节严重程度采取以下措施：',
        'rules.violations.warning': '警告提醒',
        'rules.violations.suspend': '暂停账户功能',
        'rules.violations.ban': '永久封禁账户',
        'rules.updates.title': '规则更新说明',
        'rules.updates.description': '我们保留随时修改和更新使用规则的权利。重要变更将通过应用内通知或官方渠道提前告知用户。继续使用本应用即表示您同意遵守最新的使用规则。',
        
        // 隐私政策
        'privacy.title': '隐私政策',
        'privacy.subtitle': '我们重视您的隐私，本政策说明我们如何收集、使用和保护您的个人信息',
        'privacy.overview.title': '政策概述',
        'privacy.overview.rule1': '本隐私政策适用于TakeGem应用的所有用户',
        'privacy.overview.rule2': '我们承诺保护您的个人隐私和数据安全',
        'privacy.overview.rule3': '请仔细阅读本政策，了解我们的数据处理方式',
        'privacy.overview.rule4': '使用我们的服务即表示您同意本隐私政策',
        'privacy.collection.title': '信息收集',
        'privacy.collection.rule1': '账户信息：用户名、邮箱、手机号码',
        'privacy.collection.rule2': '设备信息：设备型号、操作系统版本',
        'privacy.collection.rule3': '使用数据：应用使用时长、功能使用情况',
        'privacy.collection.rule4': '位置信息：仅在用户授权时收集',
        'privacy.usage.title': '信息使用',
        'privacy.usage.rule1': '提供和改进我们的服务',
        'privacy.usage.rule2': '处理用户的提现和奖励申请',
        'privacy.usage.rule3': '发送重要通知和服务更新',
        'privacy.usage.rule4': '防止欺诈和滥用行为',
        'privacy.sharing.title': '信息共享',
        'privacy.sharing.rule1': '我们不会出售您的个人信息',
        'privacy.sharing.rule2': '仅在法律要求时向相关部门提供信息',
        'privacy.sharing.rule3': '与可信的第三方服务提供商共享必要信息',
        'privacy.sharing.rule4': '在获得您明确同意后才会共享敏感信息',
        'privacy.security.title': '数据安全',
        'privacy.security.rule1': '使用行业标准的加密技术保护数据',
        'privacy.security.rule2': '定期进行安全审计和漏洞检测',
        'privacy.security.rule3': '限制员工对个人数据的访问权限',
        'privacy.security.rule4': '建立数据泄露应急响应机制',
        'privacy.rights.title': '用户权利',
        'privacy.rights.rule1': '查看和更新您的个人信息',
        'privacy.rights.rule2': '删除您的账户和相关数据',
        'privacy.rights.rule3': '撤回对数据处理的同意',
        'privacy.rights.rule4': '投诉数据处理相关问题',
        'privacy.contact.title': '联系我们',
        'privacy.contact.rule1': '如有隐私相关问题，请联系我们',
        'privacy.contact.rule2': '邮箱：privacy@takegem.com',
        'privacy.contact.rule3': '电话：400-123-4567',
        'privacy.contact.rule4': '我们将在48小时内回复您的询问',
        
        // 合规声明
        'compliance.title': '合规声明 - TakeGem',
        'compliance.heading': '合规声明',
        'compliance.subtitle': '我们对国际数据保护标准和法规合规的承诺',
        'compliance.lastUpdated': '最后更新：2025年1月',
        'compliance.gdpr.title': 'GDPR合规（欧盟）',
        'compliance.gdpr.intro': 'TakeGem完全符合欧盟实施的通用数据保护条例（GDPR）。我们确保为所有欧洲用户提供最高标准的数据保护。',
        'compliance.gdpr.point1': '合法依据：我们仅在GDPR第6条规定的合法依据下处理个人数据',
        'compliance.gdpr.point2': '数据主体权利：全面支持访问、更正、删除、可携带性和反对权',
        'compliance.gdpr.point3': '数据保护官：指定DPO处理隐私相关询问',
        'compliance.gdpr.point4': '违规通知：建立72小时违规通知程序',
        'compliance.coppa.title': 'COPPA合规（美国）',
        'compliance.coppa.intro': '我们严格遵守《儿童在线隐私保护法》（COPPA），保护13岁以下儿童的隐私。',
        'compliance.coppa.point1': '年龄验证：强大的年龄验证机制防止未成年人注册',
        'compliance.coppa.point2': '家长同意：13岁以下用户需要可验证的家长同意',
        'compliance.coppa.point3': '有限数据收集：在家长监督下最小化收集儿童数据',
        'compliance.coppa.point4': '安全港：参与FTC批准的安全港计划',
        'compliance.ccpa.title': 'CCPA合规（加利福尼亚）',
        'compliance.ccpa.intro': 'TakeGem遵守《加利福尼亚消费者隐私法》（CCPA）和《加利福尼亚隐私权法》（CPRA），为加州居民提供增强的隐私权。',
        'compliance.ccpa.point1': '知情权：透明披露个人信息收集和使用情况',
        'compliance.ccpa.point2': '删除权：可以请求删除个人信息',
        'compliance.ccpa.point3': '选择退出权：可选择退出个人信息销售',
        'compliance.ccpa.point4': '非歧视：无论隐私选择如何都提供平等服务',
        'compliance.international.title': '国际标准',
        'compliance.international.pipeda': 'PIPEDA（加拿大）',
        'compliance.international.pipeda.desc': '遵守《个人信息保护和电子文档法》，保护加拿大用户。',
        'compliance.international.lgpd': 'LGPD（巴西）',
        'compliance.international.lgpd.desc': '遵守《通用数据保护法》，保护巴西用户数据。',
        'compliance.international.pdpa': 'PDPA（新加坡）',
        'compliance.international.pdpa.desc': '遵守《个人数据保护法》，保护新加坡用户。',
        'compliance.international.appi': 'APPI（日本）',
        'compliance.international.appi.desc': '遵守《个人信息保护法》，保护日本用户。',
        'compliance.security.title': '安全认证',
        'compliance.security.iso27001': 'ISO 27001',
        'compliance.security.iso27001.desc': '信息安全管理',
        'compliance.security.soc2': 'SOC 2 Type II',
        'compliance.security.soc2.desc': '服务组织控制',
        'compliance.security.pci': 'PCI DSS',
        'compliance.security.pci.desc': '支付卡行业标准',
        'compliance.contact.title': '合规联系',
        'compliance.contact.intro': '如有合规相关询问、数据保护问题或行使隐私权，请联系我们的专门合规团队：',
        'compliance.contact.email.label': '邮箱：',
        'compliance.contact.dpo.label': '数据保护官：',
        'compliance.contact.response.label': '响应时间：',
        'compliance.contact.response.time': '大多数请求在30天内回复'
    },
    'en': {
        // 应用名称
        'appName': 'TakeGem',
        'language': 'English',
        
        // 导航
        'nav.home': 'Home',
        'nav.terms': 'Terms',
        'nav.privacy': 'Privacy',
        'nav.rules': 'Rules',
        'nav.compliance': 'Compliance',
        'nav.features': 'Features',
        'nav.howItWorks': 'How It Works',
        'nav.faq': 'FAQ',
        'nav.download': 'Download',
        'nav.language': 'Language Switch',
        
        // 英雄区
        'hero.title': 'TakeGem, Earn Diamond Points Easily',
        'hero.slogan': 'TakeGem, Earn Diamond Points',
        'hero.description': 'Earn redeemable points easily by watching ads, completing tasks, and inviting friends. Start your earning journey now!',
        'hero.downloadBtn': 'Download Now',
        'hero.learnMoreBtn': 'Learn More',
        
        // 功能特点
        'features.title': 'Features',
        'features.watchAds.title': 'Watch Ads to Earn Points',
        'features.watchAds.description': 'Easily watch ad videos and earn point rewards with each view. Small amounts add up to big earnings.',
        'features.dailyTasks.title': 'Daily Tasks',
        'features.dailyTasks.description': 'Complete simple daily tasks to earn extra point rewards. Various task types to meet different user needs.',
        'features.inviteFriends.title': 'Invite Friends',
        'features.inviteFriends.description': 'Invite friends to join and both parties get rewards. You also get 10% of your friends\' points as ongoing income.',
        'features.redeemRewards.title': 'Redeem Rewards',
        'features.redeemRewards.description': 'Points can be redeemed for cash, gift cards and other rewards. Minimum 2000 points for withdrawal, about $20.',
        'features.secureReliable.title': 'Secure & Reliable',
        'features.secureReliable.description': 'Strictly comply with data privacy regulations and use advanced encryption to ensure your personal information and points are safe.',
        'features.multiPlatform.title': 'Multi-Platform Support',
        'features.multiPlatform.description': 'Support both iOS and Android platforms. Earn points anytime, anywhere with cloud data sync that never loses data.',
        
        // 如何使用
        'howItWorks.title': 'How to Start Earning Points',
        'howItWorks.step1.title': 'Download App',
        'howItWorks.step1.description': 'Download TakeGem from App Store or Google Play',
        'howItWorks.step2.title': 'Register Account',
        'howItWorks.step2.description': 'Create your personal account and complete basic information',
        'howItWorks.step3.title': 'Watch Ads',
        'howItWorks.step3.description': 'Watch ad videos and get point rewards immediately',
        'howItWorks.step4.title': 'Redeem Rewards',
        'howItWorks.step4.description': 'Redeem rewards when points reach 2000 (about $20)',
        
        // FAQ部分
        'faq.title': 'Frequently Asked Questions',
        'faq.howToEarnPoints': 'How to earn points?',
        'faq.whatArePointsUsedFor': 'What are points used for?',
        'faq.whyPointsNotArrived': 'Why haven\'t my points arrived?',
        'faq.howToWithdrawRewards': 'How to withdraw or redeem rewards?',
        'faq.whyCantWatchAds': 'Why can\'t I watch ads?',
        'faq.howToInviteFriends': 'How to invite friends to earn rewards?',
        'faq.howToEarnAnswer': 'You can earn points through the following ways:\n1. Watch rewarded video ads\n2. Complete daily tasks\n3. Invite friends (you get 10% of your friends\' daily earnings as rewards)\n4. Participate in platform activities\n5. Friends register through your invitation link and complete their first ad watch (you get extra invitation rewards)',
        'faq.whatArePointsAnswer': 'Points can be exchanged for rewards according to the conversion ratio. Specific rules:\n1. Conversion ratio: 100 points = $1 USD\n2. Minimum withdrawal threshold: 2000 points (equivalent to $20 USD)\n3. Redemption types include: electronic gift cards, cash withdrawal, in-app virtual items, and physical goods (subject to inventory)',
        'faq.whyNotArrivedAnswer': 'Points may not arrive for the following reasons:\n1. Ad viewing incomplete or deemed invalid by the system\n2. Network delay causing data sync delay (please wait 5 minutes and refresh)\n3. Invitation rewards require: friends generate valid points on the day and account status is normal\n4. Account anomaly or cheating behavior detected\n5. During system maintenance\n\nIf the problem persists, you can submit details through the feedback function.',
        'faq.howToWithdrawAnswer': 'When your points reach the minimum redemption standard (2000 points = $20 USD), you can follow these steps:\n1. Go to "My Points" page\n2. Select "Redeem Rewards" and choose redemption method according to prompts (cash/gift cards, etc.)\n3. Submit redemption request and wait for review (usually completed within 24 hours)\n\nNote: Points will be automatically deducted after redemption. Virtual rewards arrive instantly, cash withdrawal arrival time depends on payment channel (usually 1-3 business days).',
        'faq.whyCantWatchAnswer': 'Possible reasons for being unable to watch ads:\n1. Unstable network connection or slow speed\n2. Temporary shortage of ad resources (please try again later)\n3. Daily viewing limit reached (refer to "Task Center" for daily viewing count)\n4. Insufficient device storage or app permissions not enabled (need to allow "Network" and "Storage" permissions)\n5. App version too old (please update to the latest version)',
        'faq.howToInviteAnswer': 'Friend invitation steps and reward explanation:\n1. Go to "Invite Friends" page to get your exclusive invitation code or share link\n2. Friends register and log in through your link/invitation code\n3. Reward mechanism:\n   - Friend completes first ad watch: You and your friend each get 50 points\n   - Long-term rewards: You automatically get 10% of your friends\' daily ad earnings as rewards (no limit, the more active your friends, the more rewards you get)\n\nRewards will be automatically distributed to your account the day after friends generate points. You can check in "Points Details".',
        
        // 下载区域
        'download.title': 'Download Now, Start Earning Points',
        'download.description': 'TakeGem is now available on major app stores. Download now and start your earning journey!',
        'download.appStore': 'Download on App Store',
        'download.googlePlay': 'Get it on Google Play',
        'download.qrCode': 'Scan to Download',
        'download.activeUsers': 'Active Users',
        'download.totalEarnings': 'Total Earnings',
        'download.rating': 'App Rating',
        
        // 页脚
        'footer.quickLinks': 'Quick Links',
        'footer.legal': 'Legal',
        'footer.contact': 'Contact Us',
        'footer.terms': 'Terms of Service',
        'footer.privacy': 'Privacy Policy',
        'footer.rules': 'Point Rules',
        'footer.compliance': 'Compliance Statement',
        'footer.appSupport': 'In-App Feedback',
        'footer.rights': 'All rights reserved',
        'footer.slogan': 'TakeGem, Earn Diamond Points',
        'footer.links': 'Quick Links',
        'footer.copyright': '© 2024 TakeGem. All rights reserved.',
        
        // 使用规则
        'rules.title': 'Usage Rules',
        'rules.subtitle': 'Please read the following rules carefully to ensure proper use of the TakeGem app',
        'rules.basic.title': 'Basic Usage Rules',
        'rules.basic.rule1': 'Users must be at least 18 years old or use this app with guardian consent.',
        'rules.basic.rule2': 'Each user can only register one account, creating multiple accounts is prohibited.',
        'rules.basic.rule3': 'Users need to provide true and valid personal information for registration.',
        'rules.basic.rule4': 'Using any automated tools or scripts to operate the app is prohibited.',
        'rules.points.title': 'Point Earning Rules',
        'rules.points.rule1': 'Watching complete ads earns corresponding points, exiting midway does not count.',
        'rules.points.rule2': 'Daily check-in can earn additional point rewards.',
        'rules.points.rule3': 'Successfully inviting friends to register earns referral rewards.',
        'rules.points.rule4': 'Points are valid for 12 months after earning, expired points will be automatically cleared.',
        'rules.withdrawal.title': 'Withdrawal and Redemption Rules',
        'rules.withdrawal.rule1': 'Minimum withdrawal amount is $2 USD.',
        'rules.withdrawal.rule2': 'Withdrawal requests will be processed within 1-3 business days.',
        'rules.withdrawal.rule3': 'Each user can withdraw up to 5 times per month.',
        'rules.withdrawal.rule4': 'Withdrawal account information must match registration information.',
        'rules.prohibited.title': 'Prohibited Behaviors',
        'rules.prohibited.rule1': 'Using cheats, scripts, or other automated tools.',
        'rules.prohibited.rule2': 'Malicious point farming or exploiting system vulnerabilities to gain points.',
        'rules.prohibited.rule3': 'Registering multiple accounts or operating accounts on behalf of others.',
        'rules.prohibited.rule4': 'Publishing false information or engaging in fraudulent behavior.',
        'rules.violations.title': 'Violation Handling',
        'rules.violations.description': 'For violations of usage rules, we will take the following measures based on severity:',
        'rules.violations.warning': 'Warning reminder',
        'rules.violations.suspend': 'Suspend account functions',
        'rules.violations.ban': 'Permanently ban account',
        'rules.updates.title': 'Rule Update Notice',
        'rules.updates.description': 'We reserve the right to modify and update usage rules at any time. Important changes will be notified to users in advance through in-app notifications or official channels. Continued use of this app indicates your agreement to comply with the latest usage rules.',
        
        // 隐私政策
        'privacy.title': 'Privacy Policy',
        'privacy.subtitle': 'We value your privacy. This policy explains how we collect, use, and protect your personal information',
        'privacy.overview.title': 'Policy Overview',
        'privacy.overview.rule1': 'This privacy policy applies to all users of the TakeGem app',
        'privacy.overview.rule2': 'We are committed to protecting your personal privacy and data security',
        'privacy.overview.rule3': 'Please read this policy carefully to understand our data processing methods',
        'privacy.overview.rule4': 'Using our services indicates your agreement to this privacy policy',
        'privacy.collection.title': 'Information Collection',
        'privacy.collection.rule1': 'Account information: username, email, phone number',
        'privacy.collection.rule2': 'Device information: device model, operating system version',
        'privacy.collection.rule3': 'Usage data: app usage duration, feature usage',
        'privacy.collection.rule4': 'Location information: collected only with user authorization',
        'privacy.usage.title': 'Information Usage',
        'privacy.usage.rule1': 'Provide and improve our services',
        'privacy.usage.rule2': 'Process user withdrawal and reward requests',
        'privacy.usage.rule3': 'Send important notifications and service updates',
        'privacy.usage.rule4': 'Prevent fraud and abuse',
        'privacy.sharing.title': 'Information Sharing',
        'privacy.sharing.rule1': 'We do not sell your personal information',
        'privacy.sharing.rule2': 'Information provided to relevant authorities only when legally required',
        'privacy.sharing.rule3': 'Share necessary information with trusted third-party service providers',
        'privacy.sharing.rule4': 'Sensitive information shared only with your explicit consent',
        'privacy.security.title': 'Data Security',
        'privacy.security.rule1': 'Use industry-standard encryption technology to protect data',
        'privacy.security.rule2': 'Regular security audits and vulnerability detection',
        'privacy.security.rule3': 'Limit employee access to personal data',
        'privacy.security.rule4': 'Establish data breach emergency response mechanisms',
        'privacy.rights.title': 'User Rights',
        'privacy.rights.rule1': 'View and update your personal information',
        'privacy.rights.rule2': 'Delete your account and related data',
        'privacy.rights.rule3': 'Withdraw consent for data processing',
        'privacy.rights.rule4': 'File complaints about data processing issues',
        'privacy.contact.title': 'Contact Us',
        'privacy.contact.rule1': 'If you have privacy-related questions, please contact us',
        'privacy.contact.rule2': 'Email: privacy@takegem.com',
        'privacy.contact.rule3': 'Phone: +1-800-123-4567',
        'privacy.contact.rule4': 'We will respond to your inquiries within 48 hours',
        
        // 合规声明
        'compliance.title': 'Compliance Statement - TakeGem',
        'compliance.heading': 'Compliance Statement',
        'compliance.subtitle': 'Our commitment to international data protection standards and regulatory compliance',
        'compliance.lastUpdated': 'Last Updated: January 2025',
        'compliance.gdpr.title': 'GDPR Compliance (EU)',
        'compliance.gdpr.intro': 'TakeGem is fully compliant with the General Data Protection Regulation (GDPR) as implemented by the European Union. We ensure the highest standards of data protection for all our European users.',
        'compliance.gdpr.point1': 'Lawful Basis: We process personal data only when we have a lawful basis under Article 6 of GDPR',
        'compliance.gdpr.point2': 'Data Subject Rights: Full support for access, rectification, erasure, portability, and objection rights',
        'compliance.gdpr.point3': 'Data Protection Officer: Appointed DPO available for privacy-related inquiries',
        'compliance.gdpr.point4': 'Breach Notification: 72-hour breach notification procedures in place',
        'compliance.coppa.title': 'COPPA Compliance (US)',
        'compliance.coppa.intro': 'We strictly adhere to the Children\'s Online Privacy Protection Act (COPPA) to protect the privacy of children under 13 years of age.',
        'compliance.coppa.point1': 'Age Verification: Robust age verification mechanisms to prevent underage registration',
        'compliance.coppa.point2': 'Parental Consent: Verifiable parental consent required for users under 13',
        'compliance.coppa.point3': 'Limited Data Collection: Minimal data collection from children with parental oversight',
        'compliance.coppa.point4': 'Safe Harbor: Participation in FTC-approved safe harbor programs',
        'compliance.ccpa.title': 'CCPA Compliance (California)',
        'compliance.ccpa.intro': 'TakeGem complies with the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), providing California residents with enhanced privacy rights.',
        'compliance.ccpa.point1': 'Right to Know: Transparent disclosure of personal information collection and use',
        'compliance.ccpa.point2': 'Right to Delete: Ability to request deletion of personal information',
        'compliance.ccpa.point3': 'Right to Opt-Out: Option to opt-out of personal information sales',
        'compliance.ccpa.point4': 'Non-Discrimination: Equal service regardless of privacy choices',
        'compliance.international.title': 'International Standards',
        'compliance.international.pipeda': 'PIPEDA (Canada)',
        'compliance.international.pipeda.desc': 'Compliance with Personal Information Protection and Electronic Documents Act for Canadian users.',
        'compliance.international.lgpd': 'LGPD (Brazil)',
        'compliance.international.lgpd.desc': 'Adherence to Lei Geral de Proteção de Dados for Brazilian user data protection.',
        'compliance.international.pdpa': 'PDPA (Singapore)',
        'compliance.international.pdpa.desc': 'Compliance with Personal Data Protection Act for Singapore-based users.',
        'compliance.international.appi': 'APPI (Japan)',
        'compliance.international.appi.desc': 'Adherence to Act on Protection of Personal Information for Japanese users.',
        'compliance.security.title': 'Security Certifications',
        'compliance.security.iso27001': 'ISO 27001',
        'compliance.security.iso27001.desc': 'Information Security Management',
        'compliance.security.soc2': 'SOC 2 Type II',
        'compliance.security.soc2.desc': 'Service Organization Control',
        'compliance.security.pci': 'PCI DSS',
        'compliance.security.pci.desc': 'Payment Card Industry Standards',
        'compliance.contact.title': 'Compliance Contact',
        'compliance.contact.intro': 'For compliance-related inquiries, data protection questions, or to exercise your privacy rights, please contact our dedicated compliance team:',
        'compliance.contact.email.label': 'Email:',
        'compliance.contact.dpo.label': 'Data Protection Officer:',
        'compliance.contact.response.label': 'Response Time:',
        'compliance.contact.response.time': 'Within 30 days for most requests'
    }
};

// 设置默认语言为英文
let currentLanguage = 'en';

// 获取翻译文本
function t(key) {
    return translations[currentLanguage][key] || key;
}

// 更新页面文本
function updatePageText() {
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });
    
    // 更新语言切换按钮文本
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) {
        const langSpan = langBtn.querySelector('[data-i18n="language"]');
        if (langSpan) {
            langSpan.textContent = t('language');
        }
    }
}

// 切换语言
function switchLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    updatePageText();
    
    // 保存语言设置到本地存储
    localStorage.setItem('language', currentLanguage);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 从本地存储读取语言设置
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    // 初始化页面文本
    updatePageText();
    
    // 预加载关键图片
    const criticalImages = [
        'images/app-preview.svg',
        'images/qr-code.svg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // 懒加载非关键图片
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // 性能监控
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('页面加载时间:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
            }, 0);
        });
    }
    
    // 绑定语言切换按钮事件
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', switchLanguage);
    }
    
    // 移动端菜单切换
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // FAQ手风琴效果
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            
            const content = this.nextElementSibling;
            if (!expanded) {
                content.classList.remove('hidden');
                content.classList.add('show');
            } else {
                content.classList.remove('show');
                setTimeout(() => content.classList.add('hidden'), 300);
            }
        });
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 数字动画效果
    function animateNumbers() {
        const numbers = document.querySelectorAll('.stats-number');
        numbers.forEach(number => {
            const target = parseInt(number.textContent.replace(/[^\d]/g, ''));
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                number.textContent = Math.floor(current).toLocaleString() + (number.textContent.includes('+') ? '+' : '');
            }, 20);
        });
    }
    
    // 页面滚动时触发数字动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    });
    
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        observer.observe(heroSection);
    }
});