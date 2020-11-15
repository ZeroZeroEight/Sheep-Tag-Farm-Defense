import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Damage
//===========================================================================
const Trig_Damage_Func001002003 = (): boolean => {

	return ( GetUnitTypeId( GetFilterUnit() ) !== FourCC( "h008" ) );

};


const Trig_Damage_Func002Func001Func001Func001C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func002Func001Func001Func002C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func002Func001Func001Func003C = (): boolean => {


	if ( ( ! ( udg_TargetsAdvanced[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitType( GetEnumUnit(), UNIT_TYPE_STRUCTURE ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func002Func001Func001Func004C = (): boolean => {


	if ( ( ! ( udg_TargetsAdvanced[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitType( GetEnumUnit(), UNIT_TYPE_STRUCTURE ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func002Func001Func001Func005Func003Func001C = (): boolean => {


	if ( ( ! ( GetUnitStateSwap( UNIT_STATE_MANA, udg_Missile[ udg_LoopIndex ] ) < 180 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_AfterDestination[ udg_LoopIndex ] === 5 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func002Func001Func001Func005Func003C = (): boolean => {


	if ( ( Trig_Damage_Func002Func001Func001Func005Func003Func001C() ) ) {

		return true;

	}


	if ( ( ( udg_AfterDestination[ udg_LoopIndex ] !== 5 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Damage_Func002Func001Func001Func005C = (): boolean => {


	if ( ( ! ( GetEnumUnit() === udg_DamageSource[ udg_LoopIndex ] ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) !== 0.57 ) ) ) {

		return false;

	}


	if ( ( ! Trig_Damage_Func002Func001Func001Func005Func003C() ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func002Func001Func001Func006C = (): boolean => {


	if ( ( ! ( GetUnitTurnSpeed( udg_Missile[ udg_LoopIndex ] ) === 0.57 ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitFlyHeight( udg_Missile[ udg_LoopIndex ] ) > 5 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func002Func001Func001C = (): boolean => {


	if ( ( Trig_Damage_Func002Func001Func001Func001C() ) ) {

		return true;

	}


	if ( ( Trig_Damage_Func002Func001Func001Func002C() ) ) {

		return true;

	}


	if ( ( Trig_Damage_Func002Func001Func001Func003C() ) ) {

		return true;

	}


	if ( ( Trig_Damage_Func002Func001Func001Func004C() ) ) {

		return true;

	}


	if ( ( Trig_Damage_Func002Func001Func001Func005C() ) ) {

		return true;

	}


	if ( ( Trig_Damage_Func002Func001Func001Func006C() ) ) {

		return true;

	}


	if ( ( ( IsUnitDeadBJ( GetEnumUnit() ) === true ) ) ) {

		return true;

	}


	if ( ( ( GetUnitTypeId( GetEnumUnit() ) === FourCC( "e002" ) ) ) ) {

		return true;

	}

	return false;

};


const Trig_Damage_Func002Func001C = (): boolean => {


	if ( ( ! Trig_Damage_Func002Func001Func001C() ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func002A = (): void => {


	if ( ( Trig_Damage_Func002Func001C() ) ) {

		GroupRemoveUnitSimple( GetEnumUnit(), udg_TempGroup )

	} else {

	null

	}


};


const Trig_Damage_Func003Func002Func001Func001Func001Func002Func001C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func003Func002Func001Func001Func001Func002Func002Func001C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] < 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func003Func002Func001Func001Func001Func002Func002Func003C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func003Func002Func001Func001Func001Func002Func002C = (): boolean => {


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func003Func002Func001Func001Func001Func002C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] !== 1 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] !== 2 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func003Func002Func001Func001Func001C = (): boolean => {


	if ( ( ! ( IsUnitInGroup( GetEnumUnit(), udg_AlreadyHit[ udg_LoopIndex ] ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func003Func002Func001Func001A = (): void => {


	if ( ( Trig_Damage_Func003Func002Func001Func001Func001C() ) ) {


		if ( ( Trig_Damage_Func003Func002Func001Func001Func001Func002C() ) ) {


			if ( ( Trig_Damage_Func003Func002Func001Func001Func001Func002Func002C() ) ) {


				if ( ( Trig_Damage_Func003Func002Func001Func001Func001Func002Func002Func003C() ) ) {

					UnitDamageTargetBJ( udg_DamageSource[ udg_LoopIndex ], GetEnumUnit(), udg_Damage[ udg_LoopIndex ], udg_AttackType[ udg_LoopIndex ], DAMAGE_TYPE_UNIVERSAL )

				} else {

					SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) - udg_Damage[ udg_LoopIndex ] ) )

				}


			} else {


				if ( ( Trig_Damage_Func003Func002Func001Func001Func001Func002Func002Func001C() ) ) {

					UnitDamageTargetBJ( udg_DamageSource[ udg_LoopIndex ], GetEnumUnit(), ( udg_Damage[ udg_LoopIndex ] * - 1 ), udg_AttackType[ udg_LoopIndex ], DAMAGE_TYPE_UNIVERSAL )

				} else {

					SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) + udg_Damage[ udg_LoopIndex ] ) )

				}


			}


		} else {


			if ( ( Trig_Damage_Func003Func002Func001Func001Func001Func002Func001C() ) ) {

				UnitDamageTargetBJ( udg_DamageSource[ udg_LoopIndex ], GetEnumUnit(), udg_Damage[ udg_LoopIndex ], udg_AttackType[ udg_LoopIndex ], DAMAGE_TYPE_UNIVERSAL )

			} else {

				SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) - udg_Damage[ udg_LoopIndex ] ) )

			}


		}

		AddSpecialEffectTargetUnitBJ( udg_DamageSpecialEffectLocation[ udg_LoopIndex ], GetEnumUnit(), udg_DamageSpecialEffect[ udg_LoopIndex ] )
		DestroyEffectBJ( GetLastCreatedEffectBJ() )
		GroupAddUnitSimple( GetEnumUnit(), udg_AlreadyHit[ udg_LoopIndex ] )

	} else {

	null

	}


};


const Trig_Damage_Func003Func002Func001C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup ) > 0 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_DamageMethod[ udg_LoopIndex ] === 3 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func003Func002Func002Func001Func003C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func003Func002Func002Func001Func004Func001C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] < 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func003Func002Func002Func001Func004Func003C = (): boolean => {


	if ( ( ! ( udg_Damage[ udg_LoopIndex ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func003Func002Func002Func001Func004C = (): boolean => {


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func003Func002Func002Func001C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] !== 1 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] !== 2 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func003Func002Func002A = (): void => {


	if ( ( Trig_Damage_Func003Func002Func002Func001C() ) ) {


		if ( ( Trig_Damage_Func003Func002Func002Func001Func004C() ) ) {


			if ( ( Trig_Damage_Func003Func002Func002Func001Func004Func003C() ) ) {

				UnitDamageTargetBJ( udg_DamageSource[ udg_LoopIndex ], GetEnumUnit(), udg_Damage[ udg_LoopIndex ], udg_AttackType[ udg_LoopIndex ], DAMAGE_TYPE_UNIVERSAL )

			} else {

				SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) - udg_Damage[ udg_LoopIndex ] ) )

			}


		} else {


			if ( ( Trig_Damage_Func003Func002Func002Func001Func004Func001C() ) ) {

				UnitDamageTargetBJ( udg_DamageSource[ udg_LoopIndex ], GetEnumUnit(), ( udg_Damage[ udg_LoopIndex ] * - 1 ), udg_AttackType[ udg_LoopIndex ], DAMAGE_TYPE_UNIVERSAL )

			} else {

				SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) + udg_Damage[ udg_LoopIndex ] ) )

			}


		}


	} else {


		if ( ( Trig_Damage_Func003Func002Func002Func001Func003C() ) ) {

			UnitDamageTargetBJ( udg_DamageSource[ udg_LoopIndex ], GetEnumUnit(), udg_Damage[ udg_LoopIndex ], udg_AttackType[ udg_LoopIndex ], DAMAGE_TYPE_UNIVERSAL )

		} else {

			SetUnitLifeBJ( GetEnumUnit(), ( GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() ) - udg_Damage[ udg_LoopIndex ] ) )

		}


	}

	AddSpecialEffectTargetUnitBJ( udg_DamageSpecialEffectLocation[ udg_LoopIndex ], GetEnumUnit(), udg_DamageSpecialEffect[ udg_LoopIndex ] )
	DestroyEffectBJ( GetLastCreatedEffectBJ() )

};


const Trig_Damage_Func003Func002C = (): boolean => {


	if ( ( ! ( udg_DamageMethod[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Func003C = (): boolean => {


	if ( ( ! ( udg_DamageMethod[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Damage_Actions = (): void => {

	udg_TempGroup = GetUnitsInRangeOfLocMatching( udg_CollisionRadius[ udg_LoopIndex ], udg_TempPoint2, Condition( Trig_Damage_Func001002003 ) );
	ForGroupBJ( udg_TempGroup, Trig_Damage_Func002A )

	if ( ( Trig_Damage_Func003C() ) ) {

		TriggerExecute( gg_trg_Damage_Method_1_And_4 )

	} else {


		if ( ( Trig_Damage_Func003Func002C() ) ) {

			ForGroupBJ( udg_TempGroup, Trig_Damage_Func003Func002Func002A )

		} else {


			if ( ( Trig_Damage_Func003Func002Func001C() ) ) {

				ForGroupBJ( udg_TempGroup, Trig_Damage_Func003Func002Func001Func001A )

			} else {

			null

			}


		}


	}

	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Damage = (): void => {

	gg_trg_Damage = CreateTrigger();
	TriggerAddAction( gg_trg_Damage, Trig_Damage_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Damage();
} );
