import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Link
//===========================================================================
const Trig_Link_Func003Func001Func003002003 = (): boolean => {

	return ( GetUnitTypeId( GetFilterUnit() ) !== FourCC( "h008" ) );

};


const Trig_Link_Func003Func001Func004Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func003Func001Func004Func001Func001Func002C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func003Func001Func004Func001Func001C = (): boolean => {


	if ( ( Trig_Link_Func003Func001Func004Func001Func001Func001C() ) ) {

		return true;

	}


	if ( ( Trig_Link_Func003Func001Func004Func001Func001Func002C() ) ) {

		return true;

	}


	if ( ( ( GetEnumUnit() === udg_DamageSource[ udg_LoopIndex ] ) ) ) {

		return true;

	}


	if ( ( ( udg_TargetsAdvanced[ udg_LoopIndex ] === 2 ) ) ) {

		return true;

	}


	if ( ( ( IsUnitType( GetEnumUnit(), UNIT_TYPE_STRUCTURE ) === true ) ) ) {

		return true;

	}


	if ( ( ( IsUnitDeadBJ( GetEnumUnit() ) === true ) ) ) {

		return true;

	}

	return false;

};


const Trig_Link_Func003Func001Func004Func001C = (): boolean => {


	if ( ( ! Trig_Link_Func003Func001Func004Func001Func001C() ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func003Func001Func004A = (): void => {


	if ( ( Trig_Link_Func003Func001Func004Func001C() ) ) {

		GroupRemoveUnitSimple( GetEnumUnit(), udg_TempGroup2 )

	} else {

	null

	}


};


const Trig_Link_Func003Func001Func006Func005A = (): void => {

	udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
	udg_Angle[ udg_LoopIndex ] = AngleBetweenPoints( udg_TempPoint2, udg_TempPoint );
	udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint2, udg_Speed[ udg_LoopIndex ], udg_Angle[ udg_LoopIndex ] );
	SetUnitX( GetEnumUnit(), GetLocationX( udg_TempPoint3 ) )
	SetUnitY( GetEnumUnit(), GetLocationY( udg_TempPoint3 ) )
	SetUnitX( udg_Missile[ udg_LoopIndex ], GetLocationX( udg_TempPoint3 ) )
	SetUnitY( udg_Missile[ udg_LoopIndex ], GetLocationY( udg_TempPoint3 ) )
	RemoveLocation( udg_TempPoint2 )
	RemoveLocation( udg_TempPoint3 )

};


const Trig_Link_Func003Func001Func006C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func003Func001C = (): boolean => {


	if ( ( ! ( IsUnitAliveBJ( udg_DamageSource[ udg_LoopIndex ] ) === true ) ) ) {

		return false;

	}


	if ( ( ! ( DistanceBetweenPoints( udg_TempPoint, udg_TempPoint2 ) > 35 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func003C = (): boolean => {


	if ( ( ! ( udg_AfterLinkDeath[ udg_LoopIndex ] === 4 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func004Func001C = (): boolean => {


	if ( ( ! ( DistanceBetweenPoints( udg_TempPoint, udg_TempPoint2 ) > 35 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitAliveBJ( udg_DamageSource[ udg_LoopIndex ] ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func004C = (): boolean => {


	if ( ( ! ( udg_AfterLinkDeath[ udg_LoopIndex ] === 3 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func005Func001Func006002003 = (): boolean => {

	return ( GetUnitTypeId( GetFilterUnit() ) !== FourCC( "h008" ) );

};


const Trig_Link_Func005Func001Func007Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func005Func001Func007Func001Func001Func002C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func005Func001Func007Func001Func001Func003C = (): boolean => {


	if ( ( ! ( udg_TargetsAdvanced[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitType( GetEnumUnit(), UNIT_TYPE_STRUCTURE ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func005Func001Func007Func001Func001Func004C = (): boolean => {


	if ( ( ! ( udg_TargetsAdvanced[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitType( GetEnumUnit(), UNIT_TYPE_STRUCTURE ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func005Func001Func007Func001Func001C = (): boolean => {


	if ( ( Trig_Link_Func005Func001Func007Func001Func001Func001C() ) ) {

		return true;

	}


	if ( ( Trig_Link_Func005Func001Func007Func001Func001Func002C() ) ) {

		return true;

	}


	if ( ( Trig_Link_Func005Func001Func007Func001Func001Func003C() ) ) {

		return true;

	}


	if ( ( Trig_Link_Func005Func001Func007Func001Func001Func004C() ) ) {

		return true;

	}


	if ( ( ( GetEnumUnit() === udg_DamageSource[ udg_LoopIndex ] ) ) ) {

		return true;

	}


	if ( ( ( IsUnitDeadBJ( GetEnumUnit() ) === true ) ) ) {

		return true;

	}

	return false;

};


const Trig_Link_Func005Func001Func007Func001C = (): boolean => {


	if ( ( ! Trig_Link_Func005Func001Func007Func001Func001C() ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func005Func001Func007A = (): void => {


	if ( ( Trig_Link_Func005Func001Func007Func001C() ) ) {

		GroupRemoveUnitSimple( GetEnumUnit(), udg_TempGroup2 )

	} else {

	null

	}


};


const Trig_Link_Func005Func001Func008Func002Func002C = (): boolean => {


	if ( ( ! ( IsUnitType( GetEnumUnit(), UNIT_TYPE_STRUCTURE ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func005Func001Func008Func002A = (): void => {

	udg_TempPoint3 = GetUnitLoc( GetEnumUnit() );

	if ( ( Trig_Link_Func005Func001Func008Func002Func002C() ) ) {

		udg_AfterLinkDeath[ udg_LoopIndex ] = 3;
		SetUnitX( udg_Missile[ udg_LoopIndex ], GetLocationX( udg_TempPoint3 ) )
		SetUnitY( udg_Missile[ udg_LoopIndex ], GetLocationY( udg_TempPoint3 ) )

	} else {

		udg_AfterLinkDeath[ udg_LoopIndex ] = 4;
		SetUnitX( GetEnumUnit(), GetLocationX( udg_TempPoint3 ) )
		SetUnitY( GetEnumUnit(), GetLocationY( udg_TempPoint3 ) )

	}

	RemoveLocation( udg_TempPoint3 )

};


const Trig_Link_Func005Func001Func008C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func005Func001C = (): boolean => {


	if ( ( ! ( DistanceBetweenPoints( udg_TempPoint, udg_TempPoint2 ) > 35 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitAliveBJ( udg_DamageSource[ udg_LoopIndex ] ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func005C = (): boolean => {


	if ( ( ! ( udg_AfterLinkDeath[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func006Func001002003 = (): boolean => {

	return ( GetUnitTypeId( GetFilterUnit() ) !== FourCC( "h008" ) );

};


const Trig_Link_Func006Func002Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func006Func002Func001Func001Func002C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func006Func002Func001Func001Func003C = (): boolean => {


	if ( ( ! ( udg_TargetsAdvanced[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitType( GetEnumUnit(), UNIT_TYPE_STRUCTURE ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func006Func002Func001Func001Func004C = (): boolean => {


	if ( ( ! ( udg_TargetsAdvanced[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitType( GetEnumUnit(), UNIT_TYPE_STRUCTURE ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func006Func002Func001Func001C = (): boolean => {


	if ( ( Trig_Link_Func006Func002Func001Func001Func001C() ) ) {

		return true;

	}


	if ( ( Trig_Link_Func006Func002Func001Func001Func002C() ) ) {

		return true;

	}


	if ( ( Trig_Link_Func006Func002Func001Func001Func003C() ) ) {

		return true;

	}


	if ( ( Trig_Link_Func006Func002Func001Func001Func004C() ) ) {

		return true;

	}


	if ( ( ( IsUnitDeadBJ( GetEnumUnit() ) === true ) ) ) {

		return true;

	}


	if ( ( ( GetEnumUnit() === udg_DamageSource[ udg_LoopIndex ] ) ) ) {

		return true;

	}

	return false;

};


const Trig_Link_Func006Func002Func001C = (): boolean => {


	if ( ( ! Trig_Link_Func006Func002Func001Func001C() ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func006Func002A = (): void => {


	if ( ( Trig_Link_Func006Func002Func001C() ) ) {

		GroupRemoveUnitSimple( GetEnumUnit(), udg_TempGroup2 )

	} else {

	null

	}


};


const Trig_Link_Func006Func003Func002Func001C = (): boolean => {


	if ( ( ! ( IsUnitType( GetEnumUnit(), UNIT_TYPE_STRUCTURE ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func006Func003Func002A = (): void => {


	if ( ( Trig_Link_Func006Func003Func002Func001C() ) ) {

		udg_AfterLinkDeath[ udg_LoopIndex ] = 3;
		udg_TempPoint3 = GetUnitLoc( GetEnumUnit() );
		SetUnitX( udg_Missile[ udg_LoopIndex ], GetLocationX( udg_TempPoint3 ) )
		SetUnitY( udg_Missile[ udg_LoopIndex ], GetLocationY( udg_TempPoint3 ) )
		RemoveLocation( udg_TempPoint3 )

	} else {

		udg_AfterLinkDeath[ udg_LoopIndex ] = 4;
		SetUnitX( GetEnumUnit(), GetLocationX( udg_TempPoint2 ) )
		SetUnitY( GetEnumUnit(), GetLocationY( udg_TempPoint2 ) )

	}


};


const Trig_Link_Func006Func003C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func006Func005C = (): boolean => {


	if ( ( ! ( udg_AfterLinkDeath[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func006C = (): boolean => {


	if ( ( ! ( udg_AfterLinkDeath[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Func009C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_LoopIndex ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Link_Actions = (): void => {

	udg_TempPoint = GetUnitLoc( udg_DamageSource[ udg_LoopIndex ] );
	udg_TempPoint2 = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );

	if ( ( Trig_Link_Func003C() ) ) {


		if ( ( Trig_Link_Func003Func001C() ) ) {

			udg_TempGroup2 = GetUnitsInRangeOfLocMatching( udg_CollisionRadius[ udg_LoopIndex ], udg_TempPoint2, Condition( Trig_Link_Func003Func001Func003002003 ) );
			ForGroupBJ( udg_TempGroup2, Trig_Link_Func003Func001Func004A )
			RemoveLocation( udg_TempPoint2 )

			if ( ( Trig_Link_Func003Func001Func006C() ) ) {

				udg_TempGroup = GetRandomSubGroup( 1, udg_TempGroup2 );
				ForGroupBJ( udg_TempGroup, Trig_Link_Func003Func001Func006Func005A )
				DestroyGroup( udg_TempGroup )

			} else {

				udg_AfterLinkDeath[ udg_LoopIndex ] = 2;
				udg_TempPoint2 = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );

			}

			DestroyGroup( udg_TempGroup2 )

		} else {

			KillUnit( udg_Missile[ udg_LoopIndex ] )

		}


	} else {

	null

	}


	if ( ( Trig_Link_Func004C() ) ) {


		if ( ( Trig_Link_Func004Func001C() ) ) {

			udg_Angle[ udg_LoopIndex ] = AngleBetweenPoints( udg_TempPoint, udg_TempPoint2 );
			udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, udg_Speed[ udg_LoopIndex ], udg_Angle[ udg_LoopIndex ] );
			SetUnitX( udg_DamageSource[ udg_LoopIndex ], GetLocationX( udg_TempPoint3 ) )
			SetUnitY( udg_DamageSource[ udg_LoopIndex ], GetLocationY( udg_TempPoint3 ) )
			RemoveLocation( udg_TempPoint3 )

		} else {

			KillUnit( udg_Missile[ udg_LoopIndex ] )

		}


	} else {

	null

	}


	if ( ( Trig_Link_Func005C() ) ) {


		if ( ( Trig_Link_Func005Func001C() ) ) {

			udg_Angle[ udg_LoopIndex ] = AngleBetweenPoints( udg_TempPoint2, udg_TempPoint );
			udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint2, udg_Speed[ udg_LoopIndex ], udg_Angle[ udg_LoopIndex ] );
			SetUnitPositionLoc( udg_Missile[ udg_LoopIndex ], udg_TempPoint3 )
			RemoveLocation( udg_TempPoint3 )
			udg_TempGroup2 = GetUnitsInRangeOfLocMatching( udg_CollisionRadius[ udg_LoopIndex ], udg_TempPoint2, Condition( Trig_Link_Func005Func001Func006002003 ) );
			ForGroupBJ( udg_TempGroup2, Trig_Link_Func005Func001Func007A )

			if ( ( Trig_Link_Func005Func001Func008C() ) ) {

			null

			} else {

				udg_TempGroup = GetRandomSubGroup( 1, udg_TempGroup2 );
				ForGroupBJ( udg_TempGroup, Trig_Link_Func005Func001Func008Func002A )
				DestroyGroup( udg_TempGroup )

			}

			DestroyGroup( udg_TempGroup2 )

		} else {

			KillUnit( udg_Missile[ udg_LoopIndex ] )

		}


	} else {

	null

	}


	if ( ( Trig_Link_Func006C() ) ) {

		udg_TempGroup2 = GetUnitsInRangeOfLocMatching( udg_ExplodeRadius[ udg_LoopIndex ], udg_TempPoint2, Condition( Trig_Link_Func006Func001002003 ) );
		ForGroupBJ( udg_TempGroup2, Trig_Link_Func006Func002A )

		if ( ( Trig_Link_Func006Func003C() ) ) {

		null

		} else {

			udg_TempGroup = GetRandomSubGroup( 1, udg_TempGroup2 );
			ForGroupBJ( udg_TempGroup, Trig_Link_Func006Func003Func002A )
			DestroyGroup( udg_TempGroup )

		}

		DestroyGroup( udg_TempGroup2 )

		if ( ( Trig_Link_Func006Func005C() ) ) {

			udg_AfterLinkDeath[ udg_LoopIndex ] = 2;

		} else {

		null

		}


	} else {

	null

	}

	RemoveLocation( udg_TempPoint2 )
	RemoveLocation( udg_TempPoint )

	if ( ( Trig_Link_Func009C() ) ) {

		udg_TempPoint2 = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
		udg_TempPoint3 = GetUnitLoc( udg_DamageSource[ udg_LoopIndex ] );
		udg_XYZ[ 1 ] = GetLocationX( udg_TempPoint3 );
		udg_XYZ[ 2 ] = GetLocationY( udg_TempPoint3 );
		udg_XYZ[ 3 ] = GetLocationZ( udg_TempPoint3 ) + 35;
		udg_XYZ[ 3 ] = ( GetUnitFlyHeight( udg_DamageSource[ udg_LoopIndex ] ) + udg_XYZ[ 3 ] );
		udg_XYZ[ 4 ] = GetLocationX( udg_TempPoint2 );
		udg_XYZ[ 5 ] = GetLocationY( udg_TempPoint2 );
		udg_XYZ[ 6 ] = GetLocationZ( udg_TempPoint2 ) + 75;
		udg_XYZ[ 6 ] = ( GetUnitFlyHeight( udg_Missile[ udg_LoopIndex ] ) + udg_XYZ[ 6 ] );
		MoveLightningEx( udg_LightningEffect[ udg_LoopIndex ], true, udg_XYZ[ 1 ], udg_XYZ[ 2 ], udg_XYZ[ 3 ], udg_XYZ[ 4 ], udg_XYZ[ 5 ], udg_XYZ[ 6 ] )
		RemoveLocation( udg_TempPoint3 )
		RemoveLocation( udg_TempPoint2 )

	} else {

	null

	}


};


//===========================================================================
const InitTrig_Link = (): void => {

	gg_trg_Link = CreateTrigger();
	TriggerAddAction( gg_trg_Link, Trig_Link_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Link();
} );
