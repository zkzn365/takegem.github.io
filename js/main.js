// 语言配置
const translations = {
    'zh': {
        // 应用名称
        'appName': '钻领钻晶',
        'language': '中文',
        
        // 导航
        'nav.features': '功能特点',
        'nav.howItWorks': '如何使用',
        'nav.faq': '常见问题',
        'nav.download': '立即下载',
        
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
        
        // FAQ
        'faq.title': '常见问题',
        'faq.howToEarn': '如何赚取积分？',
        'faq.whatArePoints': '积分有什么用？',
        'faq.whyNotArrived': '为什么积分没到账？',
        'faq.howToWithdraw': '如何提现或兑换奖励？',
        'faq.whyCantWatch': '为什么无法观看广告？',
        'faq.howToInvite': '如何邀请好友赚取奖励？',
        
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
        'footer.privacyPolicy': '隐私政策',
        'footer.termsOfService': '使用条款',
        'footer.rules': '积分规则',
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
        'privacy.contact.rule4': '我们将在48小时内回复您的询问'
    },
    'en': {
        // 应用名称
        'appName': 'TakeGem',
        'language': 'English',
        
        // 导航
        'nav.features': 'Features',
        'nav.howItWorks': 'How It Works',
        'nav.faq': 'FAQ',
        'nav.download': 'Download',
        
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
        
        // FAQ
        'faq.title': 'Frequently Asked Questions',
        'faq.howToEarn': 'How to earn points?',
        'faq.whatArePoints': 'What are points used for?',
        'faq.whyNotArrived': 'Why haven\'t my points arrived?',
        'faq.howToWithdraw': 'How to withdraw or redeem rewards?',
        'faq.whyCantWatch': 'Why can\'t I watch ads?',
        'faq.howToInvite': 'How to invite friends to earn rewards?',
        
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
        'footer.privacyPolicy': 'Privacy Policy',
        'footer.termsOfService': 'Terms of Service',
        'footer.rules': 'Point Rules',
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
        'privacy.contact.rule4': 'We will respond to your inquiries within 48 hours'
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
    const langBtn = document.getElementById('languageBtn');
    if (langBtn) {
        langBtn.textContent = t('language');
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
    const langBtn = document.getElementById('languageBtn');
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