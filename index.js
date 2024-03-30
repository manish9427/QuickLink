// prodUrl JsonData and function start here
const prodUrljsonData = [
  {
    title: "UK-PrePaid",
    link: "https://www.lycamobile.co.uk/",
    background: "btn-active",
  },
  {
    title: "UK-PostPaid",
    link: "https://paymonthly.lycamobile.co.uk/monthly-plans",
    background: "btn-active",
  },
  {
    title: "USA",
    link: "https://www.lycamobile.us/en/",
    background: "btn-active",
  },
  {
    title: "Austria",
    link: "https://www.lycamobile.at/en/",
    background: "btn-active",
  },
  {
    title: "Belgium",
    link: "https://www.lycamobile.be/en/",
    background: "btn-active",
  },
  {
    title: "Denmark",
    link: "https://www.lycamobile.dk/en/",
    background: "btn-active",
  },
  {
    title: "France",
    link: "https://www.lycamobile.fr/en/",
    background: "btn-active",
  },
  {
    title: "Germany",
    link: "https://www.lycamobile.de/en/",
    background: "btn-active",
  },
  {
    title: "Ireland",
    link: "https://www.lycamobile.ie/en/",
    background: "btn-active",
  },
  {
    title: "Italy",
    link: "https://www.lycamobile.it/en/",
    background: "btn-active",
  },
  {
    title: "Macedonia",
    link: "https://www.lycamobile.mk/en/",
    background: "btn-active",
  },
  {
    title: "Netherlands",
    link: "	https://www.lycamobile.nl/en/",
    background: "btn-active",
  },
  {
    title: "Norway",
    link: "https://www.lyca-mobile.no/en/",
    background: "btn-active",
  },
  {
    title: "Poland",
    link: "http://lycamobile.pl/en/",
    background: "btn-active",
  },
  {
    title: "Portugal",
    link: "https://www.lycamobile.pt/por/",
    background: "btn-active",
  },
  {
    title: "Romaina",
    link: "https://www.lycamobile.ro/en/",
    background: "btn-active",
  },
  {
    title: "SouthAfrica",
    link: "https://www.lycamobile.co.za/en/",
    background: "btn-active",
  },
  {
    title: "Sweden",
    link: "https://www.lycamobile.se/en/",
    background: "btn-active",
  },
  {
    title: "Switzerland",
    link: "https://www.lycamobile.ch/en/",
    background: "btn-active",
  },
  {
    title: "Tunisia",
    link: "https://www.lycamobile.tn/en/",
    background: "btn-active",
  },
  {
    title: "Uganda",
    link: "https://www.lycamobile.ug/en/",
    background: "btn-active",
  },
  {
    title: "Ukraine",
    link: "https://www.lycamobile.ua/en/",
    background: "btn-active",
  },
  {
    title: "Russia",
    link: "	https://www.lycamobile.ru/en/",
    background: "disabled",
  },
  {
    title: "PhoneShop",
    link: "https://eshop.lycamobile.co.uk/",
    background: "btn-active",
  },
  {
    title: "Cube Movil",
    link: "https://www.cubemovil.es/en/",
    background: "btn-active",
  },
  {
    title: "Australia",
    link: "https://www.lycamobile.com.au/",
    background: "btn-active",
  },
];
$(function () {
  $(document).ready(function () {
    var data = prodUrljsonData;
    var html = "";
    for (var i = 0; i < data.length; i++) {
      //   html += '<h2>' + data[i].title + '</h2>';
      //   html += '<p><a href="' + data[i].link + '">' + data[i].link + '</a></p>';
      html +=
        '<div class="col-lg-1 col-3 p-1"><a class="btn ' +
        data[i].background +
        ' w-100" style="color:' +
        data[i].color +
        '" target="_blank" href="' +
        data[i].link +
        '">' +
        data[i].title +
        "</a></div>";
    }
    $("#prodUrlData").html(html);
  });
});
// prodUrl JsonData and function end here

// iOS JsonData and function start here
const iOSUrljsonData = [
  {
    title: "UK",
    link: "https://apps.apple.com/gb/app/lycamobile/id1670808515",
    background: "btn-active",
  },
  {
    title: "USA",
    link: "https://apps.apple.com/us/app/lycamobile-usa/id1380609824",
    background: "btn-active",
  },

  {
    title: "Leagcy App(Global)",
    link: "https://apps.apple.com/at/app/lycamobile/id1234252942",
    background: "btn-active",
  },
];
$(function () {
  $(document).ready(function () {
    var data = iOSUrljsonData;
    var html = "";
    for (var i = 0; i < data.length; i++) {
      //   html += '<h2>' + data[i].title + '</h2>';
      //   html += '<p><a href="' + data[i].link + '">' + data[i].link + '</a></p>';
      html +=
        '<div class="col-lg-1 col-3 p-1"><a class="btn ' +
        data[i].background +
        ' w-100" style="color:' +
        data[i].color +
        '" disable=data[i].disable target="_blank" href="' +
        data[i].link +
        '">' +
        data[i].title +
        "</a></div>";
    }
    $("#iOSUrlData").html(html);
  });
});
// iOS JsonData and function end here

// Android JsonData and function start here
const androidUrljsonData = [
  {
    title: "UK",
    link: "https://play.google.com/store/apps/details?id=com.lycadigital.lyca_mobile_uk",
    background: "btn-active",
  },
  {
    title: "USA",
    link: "https://play.google.com/store/apps/details?id=com.lycadigital.lycamobile&hl=en&gl=US",
    background: "btn-active",
  },

  {
    title: "Leagcy App(Global)",
    link: "https://play.google.com/store/apps/details?id=com.lycadigital.lycamobile&hl=en&gl=US",
    background: "btn-active",
  },
];
$(function () {
  $(document).ready(function () {
    var data = androidUrljsonData;
    var html = "";
    for (var i = 0; i < data.length; i++) {
      //   html += '<h2>' + data[i].title + '</h2>';
      //   html += '<p><a href="' + data[i].link + '">' + data[i].link + '</a></p>';
      html +=
        '<div class="col-lg-1 col-3 p-1"><a class="btn ' +
        data[i].background +
        ' w-100" style="color:' +
        data[i].color +
        " background:" +
        data[i].background +
        '" disable=data[i].disable target="_blank" href="' +
        data[i].link +
        '">' +
        data[i].title +
        "</a></div>";
    }
    $("#androidUrlData").html(html);
  });
});
// Android JsonData and function end here

// otherUrl JsonData and function start here
const otherUrljsonData = [
  {
    title: "Keka-HR",
    link: "https://lycadigital.keka.com/",
    background: "btn-active",
  },
  {
    title: "Jira",
    link: "https://id.atlassian.com/login?continue=https%3A%2F%2Fid.atlassian.com%2Fjoin%2Fuser-access%3Fresource%3Dari%253Acloud%253Ajira%253A%253Asite%252Feb6eea50-1f9d-4962-96ff-c71bdb71dadc%26continue%3Dhttps%253A%252F%252Fldinternal.atlassian.net&application=jira",
    background: "btn-active",
  },
  {
    title: "JSON Editor",
    link: "https://jsoneditoronline.org/#left=local.fereha&right=local.qeyuto",
    background: "btn-active",
  },
  {
    title: "Security Headers Checker",
    link: "https://securityheaders.com/",
    background: "btn-active",
  },
  {
    title: "SSL Checker",
    link: "https://www.sslshopper.com/ssl-checker.html",
    background: "btn-active",
  },
  {
    title: "TLS checker",
    link: "https://www.cdn77.com/tls-test",
    background: "btn-active",
  },
  {
    title: "OWASP Checker",
    link: "https://hostedscan.com/owasp-vulnerability-scan",
    background: "btn-active",
  },
  {
    title: "SSL Checker",
    link: "https://www.wormly.com/test_ssl",
    background: "btn-active",
  },
  {
    title: "Website Speed Checker",
    link: "https://tools.keycdn.com/speed",
    background: "btn-active",
  },
  {
    title: "Mozilla Observatory",
    link: "https://observatory.mozilla.org/",
    background: "btn-active",
  },
  {
    title: "PageSpeed Test",
    link: "https://pagespeed.web.dev/",
    background: "btn-active",
  },
  {
    title: "GT Matrix",
    link: "https://gtmetrix.com/",
    background: "btn-active",
  },
];
$(function () {
  $(document).ready(function () {
    var data = otherUrljsonData;
    var html = "";
    for (var i = 0; i < data.length; i++) {
      //   html += '<h2>' + data[i].title + '</h2>';
      //   html += '<p><a href="' + data[i].link + '">' + data[i].link + '</a></p>';
      html +=
        '<div class="col-lg-1 col-3 p-1"><a class="btn ' +
        data[i].background +
        ' w-100" style="color:' +
        data[i].color +
        '" target="_blank" href="' +
        data[i].link +
        '">' +
        data[i].title +
        "</a></div>";
    }
    $("#otherUrlData").html(html);
  });
});
// otherUrl JsonData and function start here

const internalUrlJsonData = [
  {
    title: "Gmail",
    link: "https://mail.google.com/mail/u/0/#inbox",
    background: "btn-active",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/feed/",
    background: "btn-active",
  },
  {
    title: "WorldTime",
    link: "https://www.worldtimebuddy.com/",
    background: "btn-active",
  },
  {
    title: "Google Translator",
    link: "https://translate.google.com/",
    background: "btn-active",
  },
  {
    title: "DZone",
    link: "https://dzone.com/",
    background: "btn-active",
  },
  {
    title: "Google Translator",
    link: "https://translate.google.com/",
    background: "btn-active",
  },
  {
    title: "Random Address",
    link: "https://www.bestrandoms.com/random-address-in-au?quantity=6",
    background: "btn-active",
  },
];
$(function () {
  $(document).ready(function () {
    var data = internalUrlJsonData;
    var html = "";
    // data.style.color = "red";
    for (var i = 0; i < data.length; i++) {
      html +=
        '<div class="col-lg-1 col-3 p-1"><a target="_blank" class="btn ' +
        data[i].background +
        ' w-100" style="color:' +
        data[i].color +
        ' pointer-events: none"  href="' +
        data[i].link +
        '">' +
        data[i].title +
        "</a></div>";
    }
    $("#internalUrlData").html(html);
  });
});

// CloudwatchUrl JsonData and function start here
const CloudwatchUrlJsonData = [
  {
    title: "DT-UK/Ireland",
    link: "https://lycadt.awsapps.com/start#/",
    background: "btn-active",
  },
  {
    title: "DT-UK/Ireland Direct",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#logsV2:log-groups",
    background: "btn-active",
  },
  {
    title: "Cloudflare-UK",
    link: "https://dash.cloudflare.com/de9685253e4a40309f259067be9bae0a/lycamobile.co.uk",
    background: "btn-active",
  },
  {
    title: "Cloudflare-Ireland",
    link: "https://dash.cloudflare.com/de9685253e4a40309f259067be9bae0a/lycamobile.ie",
    background: "btn-active",
  },
  {
    title: "Cloudflare-USA",
    link: "https://dash.cloudflare.com/de9685253e4a40309f259067be9bae0a/lycamobile.us",
    background: "btn-active",
  },
  {
    title: "Cloudflare AuditLog",
    link: "https://dash.cloudflare.com/de9685253e4a40309f259067be9bae0a/audit-log",
    background: "btn-active",
  },
  {
    title: "Adobe Analytics",
    link: "https://experience.adobe.com/#/@lycamobile/so:lycamo0/analytics/spa/index.html#/workspace",
    background: "btn-active",
  },
  {
    title: "AppDynamic",
    link: "https://lycatechservicespvtltd-prod.saas.appdynamics.com/controller/",
    background: "btn-active",
  },
  {
    title: "USA",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=US-Website-Platform-RDS-Memcached-Metrics",
    background: "btn-active",
  },
  {
    title: "UK	",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=UK-Website-Platform-RDS-Memcached-Metrics",
    background: "btn-active",
  },
  {
    title: "Austria",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Austria-Website-Platform-RDS-Memcached-Metrics",
    background: "btn-active",
  },
  {
    title: "Belgium",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Belgium-Website-Platform-RDS-Memcache-Metrics",
    background: "btn-active",
  },
  {
    title: "Denmark",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Denmark-Web-Platform-RDS-Memcached-Metrics",
    background: "btn-active",
  },
  {
    title: "France",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=France-Web-Platform-RDS-Memcached-Metrics",
    background: "btn-active",
  },
  {
    title: "Germany",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Germany-Web-Platform-RDS-Memcached-Metrics",
    background: "btn-active",
  },
  {
    title: "Ireland",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Ireland-Web-Platform-RDS-Memcached-Metrics",
    background: "btn-active",
  },
  {
    title: "Italy",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Italy-Web-Platform-RDS-Memcached-Metrics",
    background: "btn-active",
  },
  {
    title: "Macedonia",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Macedonia-Website-Platform-RDS-Memcache-Metrics",
    background: "btn-active",
  },
  {
    title: "Netherland",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Netherland-Web-Platform-RDS-Memcache-Metrics",
    background: "btn-active",
  },
  {
    title: "Norway",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Norway-Web-platform-RDS-Memcache-Metrics",
    background: "btn-active",
  },
  {
    title: "Poland",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Poland-website-platform-RDS",
    background: "btn-active",
  },
  {
    title: "Portugal",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Portugal-Web-Platform-RDS-Metrics",
    background: "btn-active",
  },
  {
    title: "Romania",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Romania-Web-Platform-RDS-Memcache-Metrics",
    background: "btn-active",
  },
  {
    title: "SouthAfrica",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=SouthAfrica-Web-Platform-RDS-Memcached-Metrics",
    background: "btn-active",
  },
  {
    title: "Sweden",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Sweden-CDN-web-platform-RDS-Memcache-Metrics",
    background: "btn-active",
  },
  {
    title: "Tunisia",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Tunisia-Web-Platform-RDS-Memcached-Metrics",
    background: "btn-active",
  },
  {
    title: "Uganda",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Uganda-Web-Platform-RDS-Memcache-Metrics",
    background: "btn-active",
  },
  {
    title: "Ukraine",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Ukraine-Web-platform-RDS-Memcache-Metrics",
    background: "btn-active",
  },
  {
    title: "Russia",
    link: "https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:name=Russia-Platform-Log",
    background: "disabled",
  },
];
$(function () {
  $(document).ready(function () {
    var data = CloudwatchUrlJsonData;
    var html = "";
    // data.style.color = "red";
    for (var i = 0; i < data.length; i++) {
      //   html += '<h2>' + data[i].title + '</h2>';
      //   html += '<p><a href="' + data[i].link + '">' + data[i].link + '</a></p>';
      html +=
        '<div class="col-lg-1 col-3 p-1"><a target="_blank" class="btn ' +
        data[i].background +
        ' w-100" style="color:' +
        data[i].color +
        '" href="' +
        data[i].link +
        '">' +
        data[i].title +
        "</a></div>";
      // color += html.style.color = 'red';
    }
    $("#CloudwatchUrlData").html(html);
  });
});
// CloudwatchUrl JsonData and function end here

// stageUrl JsonData and function start here
const stageUrljsonData = [
  {
    title: "UK-PrePaid",
    link: "https://stage.ldsvcplatform.com/stage1/",
    background: "btn-active",
  },
  {
    title: "USA",
    link: "https://stage-us.ldsvcplatform.com/supportstageusa/login2/",
    background: "btn-active",
  },

  {
    title: "Austria",
    link: "https://stage-austria.ldsvcplatform.com/stage1/en/",
    background: "btn-active",
  },
  {
    title: "Belgium",
    link: "https://stage-belgium.ldsvcplatform.com/stage3/en/",
    background: "btn-active",
  },
  {
    title: "Denmark",
    link: "https://stage-denmark.ldsvcplatform.com/stage1/da/",
    background: "btn-active",
  },
  {
    title: "France",
    link: "	https://stage-france.ldsvcplatform.com/stage4/en/",
    background: "btn-active",
  },
  {
    title: "Germany",
    link: "https://stage-germany.ldsvcplatform.com/stage1/en/",
    background: "btn-active",
  },
  {
    title: "Ireland",
    link: "https://stage-ireland.ldsvcplatform.com/stage3/en/",
    background: "btn-active",
  },
  {
    title: "Italy",
    link: "	https://stage-italy.ldsvcplatform.com/stage2/en/",
    background: "btn-active",
  },
  {
    title: "Macedonia",
    link: "https://stage-macedonia.ldsvcplatform.com/stage2/mk/",
    background: "btn-active",
  },
  {
    title: "Mexicco",
    link: "https://mexicomobile.ldsvcplatform.com/login",
    background: "btn-active",
  },
  {
    title: "Netherlands",
    link: "https://stage-nl.ldsvcplatform.com/stage1/en/",
    background: "btn-active",
  },
  {
    title: "Norway",
    link: "https://stage-norway.ldsvcplatform.com/stage1/",
    background: "btn-active",
  },
  {
    title: "Poland",
    link: "https://stage-poland.ldsvcplatform.com/stage6/en/",
    background: "btn-active",
  },
  {
    title: "Portugal",
    link: "https://stage-portugal.ldsvcplatform.com/stage1/en/",
    background: "btn-active",
  },
  {
    title: "Romaina",
    link: "https://stage-romania.ldsvcplatform.com/en/",
    background: "btn-active",
  },
  {
    title: "SouthAfrica",
    link: "	https://stage-sa.ldsvcplatform.com/stage1/en/",
    background: "btn-active",
  },
  {
    title: "Sweden",
    link: "https://stage-sweden.ldsvcplatform.com/en/",
    background: "btn-active",
  },
  {
    title: "Switzerland",
    link: "https://stage-swiss.ldsvcplatform.com/stage1/en/",
    background: "btn-active",
  },
  {
    title: "Tunisia",
    link: "https://stage-tunisia.ldsvcplatform.com/stage2/en/",
    background: "btn-active",
  },
  {
    title: "Uganda",
    link: "https://stage-uganda.ldsvcplatform.com/uat1/",
    background: "btn-active",
  },
  {
    title: "Ukraine",
    link: "https://stage-ua.ldsvcplatform.com/stage3/en/",
    background: "btn-active",
  },
  {
    title: "Spain",
    link: "https://spain-web-postpaid.ldsvcplatform.com/en/",
    background: "btn-active",
  },
  {
    title: "Russia",
    link: "	https://stage-russia.ldsvcplatform.com/es/bundle/england-2/",
    background: "disabled",
  },
];
$(function () {
  $(document).ready(function () {
    var data = stageUrljsonData;
    var html = "";
    for (var i = 0; i < data.length; i++) {
      //   html += '<h2>' + data[i].title + '</h2>';
      //   html += '<p><a href="' + data[i].link + '">' + data[i].link + '</a></p>';
      html +=
        '<div class="col-lg-1 col-3 p-1"><a class="btn ' +
        data[i].background +
        ' w-100" style="color:' +
        data[i].color +
        '" target="_blank" href="' +
        data[i].link +
        '">' +
        data[i].title +
        "</a></div>";
    }
    $("#stageUrlData").html(html);
  });
});
// stageUrl JsonData and function end here

const personalUrlJsonData = [
  {
    title: "a",
    link: "",
    background: "btn-active",
  },
  {
    title: "b",
    link: "",
    background: "disabled",
  },
];
$(function () {
  $(document).ready(function () {
    var data = personalUrlJsonData;
    var html = "";
    // data.style.color = "red";
    for (var i = 0; i < data.length; i++) {
      html +=
        '<div class="col-lg-1 col-3 p-1"><a target="_blank" class="btn ' +
        data[i].background +
        ' w-100" style="color:' +
        data[i].color +
        ' pointer-events: none"  href="' +
        data[i].link +
        '">' +
        data[i].title +
        "</a></div>";
    }
    $("#personalUrlData").html(html);
  });
});
