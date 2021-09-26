import { Injectable } from "@nestjs/common";
import update from "lodash.update";

import { IAccountSetting } from "@interfaces/account-setting.interface";
import { IAdmin } from "@interfaces/admin.interface";
import { IAffiliate } from "@interfaces/affiliate.interface";
import { ICategory } from "@interfaces/category.interface";
import { ISession } from "@interfaces/session.interface";
import { IShop } from "@interfaces/shop.interface";
import { ISystemTransaction } from "@interfaces/system-transaction.interface";
import { IUserCard } from "@interfaces/user-card.interface";
import { IUser } from "@interfaces/user.interface";
import { IWallet } from "@interfaces/wallet.interface";
import { Entity } from "@constants/entity.constants";

@Injectable()
export class Helpers {
  // ---------------------------------------------------------------
  // GENERATE USER CODE
  generateUserCode(): string {
    // Tạo số ngẫu nhiên từ 100000 đến 999999
    const number = Math.floor(Math.random() * 999999) + 100000;
    return `NLFB${number}`;
  }

  // ---------------------------------------------------------------
  // GENERATE USER NAME
  generateRandomUsername(name: string): string {
    const nameArr = name.toLowerCase().split(" ");
    const randomNum = Math.floor(Math.random() * 999) + 100;
    const username = `${nameArr.join("")}${randomNum}`;

    return username;
  }

  // ---------------------------------------------------------------
  // GET COOKIES FOR LOGOUT
  getCookiesForLogOut(): any {
    return [
      "at=; HttpOnly; Path=/; Max-Age=0",
      "rt=; HttpOnly; Path=/; Max-Age=0",
    ];
  }

  // ---------------------------------------------------------------
  // SANITIZE AFFILIATE
  sanitizeAffiliate(affiliate: IAffiliate): any {
    return {
      id: affiliate._id,
      referralFrom: affiliate.referralFrom,
      referralTo: affiliate.referralTo,
      rewardCoin: affiliate.rewardCoin,
      archivements: affiliate.archivements,
    };
  }

  // ---------------------------------------------------------------
  // SANITIZE USER
  sanitizeUser(user: IUser): any {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      username: user.username,
      avatar: user.avatar,
      userCode: user.userCode,
      active: user.active,
      description: user.description || undefined,
      phone: user.phone || undefined,
      facebook: user.facebook || undefined,
      address: user.address || undefined,
      badges: user.badges,
      hasShop: user.hasShop,
    };
  }

  // ---------------------------------------------------------------
  // SANITIZE ADMIN
  sanitizeAdmin(admin: IAdmin): any {
    return {
      id: admin._id,
      username: admin.username,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      avatar: admin.avatar,
      badges: admin.badges,
      active: admin.active,
      address: admin.address || undefined,
      facebook: admin.facebook || undefined,
      description: admin.description || undefined,
      phone: admin.phone || undefined,
    };
  }

  // ---------------------------------------------------------------
  // SANITIZE ACCOUNT SETTING
  sanitizeAccountSetting(accountSetting: IAccountSetting): any {
    return {
      id: accountSetting._id,
      verifyEmail: accountSetting.verifyEmail,
      verifyAccount: accountSetting.verifyAccount,
      identification: accountSetting.identification,
      lastReadNotification: accountSetting.lastReadNotification,
      lastUpdateUsername: accountSetting.lastUpdateUsername,
    };
  }

  // ---------------------------------------------------------------
  // SANITIZE CATEGORY
  sanitizeCategory(category: ICategory): any {
    return {
      id: category._id,
      title: category.title,
      baseImage: category.baseImage,
      homepageImage: category.homepageImage,
    };
  }

  // ---------------------------------------------------------------
  // SANITIZE SESSION
  sanitizeSession(session: ISession): any {
    return {
      id: session._id,
      ip: session.ip,
      userAgent: session.userAgent,
      os: session.os,
      time: session.time,
    };
  }

  // ---------------------------------------------------------------
  // SANITIZE SHOP
  sanitizeShop(shop: IShop): any {
    return {
      id: shop._id,
      name: shop.name,
      shortName: shop.shortName,
      avatar: shop.avatar,
      description: shop.description,
      badges: shop.badges,
    };
  }

  // ---------------------------------------------------------------
  // SANITIZE SYSTEM TRANSACTION
  sanitizeSystemTransaction(systemTransaction: ISystemTransaction): any {
    return {
      id: systemTransaction._id,
      sender: systemTransaction.sender,
      receiver: systemTransaction.receiver,
      totalCoin: systemTransaction.totalCoin,
      type: systemTransaction.type,
      note: systemTransaction.note,
      handleBy: systemTransaction.handleBy,
    };
  }

  // ---------------------------------------------------------------
  // SANITIZE USER CARD
  sanitizeUserCard(userCard: IUserCard): any {
    return {
      id: userCard._id,
      shop: userCard.shop,
      cardHolder: userCard.cardHolder,
      cardNumber: userCard.cardNumber,
      bank: userCard.bank,
    };
  }

  // ---------------------------------------------------------------
  // SANITIZE WALLET
  sanitizeWallet(wallet: IWallet): any {
    return {
      id: wallet._id,
      whichOwner: wallet.whichOwner,
      owner: wallet.owner,
      coin: wallet.coin,
    };
  }

  private mapEntity(entity: Entity): any {
    switch (entity) {
      case Entity.ADMIN:
        return this.sanitizeAdmin;
      case Entity.USER:
        return this.sanitizeUser;
      case Entity.WALLET:
        return this.sanitizeWallet;
      case Entity.ACCOUNT_SETTING:
        return this.sanitizeAccountSetting;
      case Entity.SESSION:
        return this.sanitizeSession;
      case Entity.SHOP:
        return this.sanitizeShop;
      case Entity.SYSTEM_TRANSACTION:
        return this.sanitizeSystemTransaction;
      case Entity.USER_CARD:
        return this.sanitizeUserCard;
      case Entity.CATEGORY:
        return this.sanitizeCategory;
      case Entity.AFFILIATE:
        return this.sanitizeAffiliate;
      default:
        return null;
    }
  }

  // ---------------------------------------------------------------
  // SANITIZE POPULATED FIELDS IN OBJECT
  sanitizePopulatedObject(
    object: Record<any, any>,
    entity: Entity,
    fields: string[]
  ): any {
    const funcSanitize = this.mapEntity(entity);
    for (const field of fields) {
      update(object, field, (ele) => funcSanitize(ele));
    }
    return object;
  }
}
